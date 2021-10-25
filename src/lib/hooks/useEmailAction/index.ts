import { useMemo, useState } from 'react';

const useEmailAction = () => {
	const [error, setError] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [critical, setCritical] = useState<boolean>(false);
	const [code, setCode] = useState<number>(500);
	const [canClear, setCanClear] = useState<boolean>(true);

	const setters = useMemo(() => {
		return {
			setError,
			setMessage,
			setCritical,
			setCode,
			setCanClear,
		};
	}, [setError, setMessage, setCritical, setCode, setCanClear]);

	const result = useMemo(() => {
		return {
			error,
			message,
			critical,
			code,
			canClear,
			setters,
		};
	}, [error, message, critical, code, canClear, setters]);

	return result;
};

export default useEmailAction;
