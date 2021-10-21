import { useEffect, useState, useRef } from 'react';

const useDebounce = <T>(value: T, delay = 200): [T, (val: T) => void] => {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	const subscriber = useRef<any>();

	useEffect(() => {
		if (subscriber.current) {
			clearTimeout(subscriber.current);
		}
		subscriber.current = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(subscriber.current);
			subscriber.current = null;
		};
	}, [value, delay]);

	return [debouncedValue, setDebouncedValue];
};

export default useDebounce;
