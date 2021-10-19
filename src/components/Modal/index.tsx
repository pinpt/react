import React from 'react';
import { useEffect, useRef, useState, createElement } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
	children?: React.ReactNode;
	visible: boolean;
	className?: string;
	__previewMode?: boolean;
}

const Modal = (props: ModalProps) => {
	const elementRef = useRef<any>();
	const containerRef = useRef<any>();
	const shadowRef = useRef<any>();

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const element = document.createElement('div');
		const shadow = document.createElement('div');
		const container = document.createElement('div');

		element.append(shadow, container);

		element.className = 'Pinpoint';
		element.style.position = 'fixed';
		element.style.width = '100vw';
		element.style.height = '100vh';
		element.style.top = '0';
		element.style.left = '0';

		shadow.style.backgroundColor = 'rgba(0, 0, 0, .50)';
		shadow.style.position = 'absolute';
		shadow.style.top = '0';
		shadow.style.left = '0';
		shadow.style.right = '0';
		shadow.style.bottom = '0';
		shadow.style.zIndex = '99998';
		shadow.style.display = 'none';

		container.className = props.className ?? 'Pinpoint Modal';
		container.style.zIndex = '99999';
		container.style.position = 'absolute';
		container.style.opacity = '0';
		container.style.maxWidth = 'calc(100% - 80px)';
		container.style.maxHeight = 'calc(100% - 80px)';
		container.style.left = '50%';
		container.style.top = '50%';
		container.style.bottom = 'auto';
		container.style.right = 'auto';
		container.style.transform = 'translate(-50%, -50%)';
		container.style.transition = 'opacity 300ms ease-in-out';
		container.style.width = '650px';
		container.style.height = 'auto';
		container.style.backgroundColor = 'white';
		container.style.borderRadius = '4px';
		container.style.border = '1px solid #eee';
		container.style.boxShadow = '0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25)';

		containerRef.current = container;
		shadowRef.current = shadow;
		elementRef.current = element;

		if (!props.__previewMode) {
			document.body.appendChild(element);
			return () => {
				document.body.removeChild(element);
			};
		}
	}, [props.__previewMode]);
	useEffect(() => setVisible(props.visible), [props.visible]);
	useEffect(() => {
		if (visible) {
			shadowRef.current.style.display = 'block';
			containerRef.current.style.opacity = '1';

			document.body.style.left = '0';
			document.body.style.right = '0';
			document.body.style.bottom = '0';
			document.body.style.top = `-${window.scrollY}px`;
			document.body.style.position = 'fixed';

		} else {

			const scrollY = document.body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.right = '';
			document.body.style.bottom = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);

			shadowRef.current.style.display = 'none';
			containerRef.current.style.opacity = '0';
		}
	}, [visible]);
	if (containerRef.current && visible) {
		if (props.__previewMode) {
			return (
				<div className="Pinpoint">
					<div className={props.className ?? 'Pinpoint Modal'}>{props.children}</div>
				</div>
			);
		}
		return createPortal(props.children, containerRef.current);
	}
	return null;
};

export default Modal;
