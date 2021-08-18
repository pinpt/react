import { useEffect } from 'react';

type Task = () => void;

interface TaskEntry {
	task: Task;
	deadline: number;
	mandatory: boolean;
}

const getWindow = (): any => {
	if (typeof window === 'object') {
		return window;
	}
	if (typeof global === 'object') {
		return global;
	}
	return {};
};

// imperfect pollyfill for requestIdleCallback
const requestIdleCallback =
	getWindow().requestIdleCallback ||
	((handler: () => void, options: { timeout: number }) => {
		// if we don't have a requestIdleCallback we're just going to invoke <timeout> later
		// which isn't at all the behavior of requestIdleCallback but it's ok for this implementation
		// because we're checking a minimum time anyway.
		return setTimeout(handler, options.timeout ?? 50);
	});

const cancelIdleCallback =
	getWindow().cancelIdleCallback ||
	((id: any) => {
		clearTimeout(id);
	});

let smallest = 1000;
let scheduled = false;
let timer: any; // for setTimeout
let timer2: any; // for requestIdleCallback
let queue: TaskEntry[] = [];
let shutdownInstalled = false;

/**
 * useBackground is a global background queue mechanism that will run a task at a minimum
 * time later when the system is (possibly) idle.
 *
 * Basic Usage:
 *
 * const background = useBackground();
 * background(() => {
 * 	console.log('hi i was invoked later');
 * });
 *
 * You can also provide a minimum time before execution. By default is be no faster than 1s
 * after you queued the task.
 *
 * const background = useBackground();
 * background(() => console.log('hi'), 10000);
 *
 * In this example, we're saying don't send this faster than 10s later when idle.
 *
 * By default tasks will not be executed on unmount of the hook or when the window is closed.
 * However, you can request that the task be mandatory and it will try and run your task either
 * when the hook is unmounted or on window before unload:
 *
 * const background = useBackground();
 * background(() => console.log('hi'), 10000, true);
 *
 * NOTE: this hook is using a global task queue. You can call the hook in as many places as you
 * want but the internal queue and scheduler is global.
 *
 */
const schedule = (mandatory: boolean, queueSchedule: () => void) => {
	// check and see if we have any pending tasks that are ready
	if (queue.length) {
		const now = Date.now();
		const newqueue: TaskEntry[] = [];
		for (let c = 0; c < queue.length; c++) {
			const entry = queue[c];
			// if the min time has elapsed OR we're in shutdown then execute
			if (now >= entry.deadline || (mandatory && entry.mandatory)) {
				entry.task();
			} else {
				// re-add the task
				newqueue.push(entry);
				// recalculate the time ellapsed before the next smallest window
				smallest = Math.max(0, Math.min(smallest, entry.deadline - now));
			}
		}
		queue = newqueue;
		if (queue.length && !mandatory) {
			// if we have items still in the queue, re-schedule
			queueSchedule();
			return;
		}
	}
	timer = null;
	timer2 = null;
	scheduled = false;
	smallest = 1000; // reset to our default
};

// we are going to use setTimeout to indicate that we have pending task(s)
// ready and then wait until we're idle *after* that to schedule execution
// which will guarantee we're sending only after delay *and* when event loop is idle
const queueSchedule = () => {
	timer = setTimeout(() => {
		timer = null;
		timer2 = requestIdleCallback(() => schedule(false, queueSchedule));
	}, smallest);
};

const useBackground = () => {
	useEffect(() => {
		// since we're making this global only set the unload handler on the first hook load
		if (!shutdownInstalled) {
			const w = getWindow();
			const shutdown = () => {
				if (timer) {
					clearTimeout(timer);
					timer = null;
				}
				if (timer2) {
					cancelIdleCallback(timer2);
					timer2 = null;
				}
				schedule(true, () => null); // schedule any mandatory tasks to run immediately
			};
			w.addEventListener?.('beforeunload', shutdown);
			shutdownInstalled = true;
		}
	}, []);
	return (task: Task, delay = 1000, mandatory = false) => {
		queue.push({ task, deadline: Date.now() + delay, mandatory });
		if (!scheduled) {
			scheduled = true;
			// fire at a minimum of the smallest requested time by all tasks
			smallest = Math.min(smallest, delay);
			queueSchedule();
		}
	};
};

export default useBackground;
