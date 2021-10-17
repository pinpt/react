export const cancelEvent = (e: React.MouseEvent, callback?: (e: React.MouseEvent) => any) => {
	e.preventDefault();
	e.stopPropagation();
	callback?.(e);
	return false;
};
