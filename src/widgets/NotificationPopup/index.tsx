/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useRef, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
import Card from '../../components/Card';
import type { ICoverMedia } from '../../lib/types';

interface PopupProps {
	previewData: {
		title: string;
		headline: string;
		url: string;
		coverMedia: ICoverMedia;
	};
	header: {
		title: string;
	};
	button?: {
		text: string;
		background?: string;
		foreground?: string;
	};
	target: {
		position?: 'bottom left' | 'bottom right' | 'top left' | 'top right';
	};
	onClose?: () => void;
	__previewMode?: boolean;
	className?: string;
}

const Relative = ({
	position,
	children,
	__previewMode,
}: {
	position: string;
	children?: React.ReactNode;
	__previewMode?: boolean;
}) => {
	const elementRef = useRef<any>();
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const container = document.createElement('div');
		container.className = 'Pinpoint';
		container.style.position = 'absolute';
		container.style.zIndex = '7000';
		container.style.position = 'fixed';
		container.style.boxShadow = '0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25)';
		container.style.zIndex = '9000';
		switch (position) {
			case 'top left': {
				container.style.top = '10px';
				container.style.left = '10px';
				break;
			}
			case 'top right': {
				container.style.top = '10px';
				container.style.right = '10px';
				break;
			}
			case 'bottom left': {
				container.style.bottom = '10px';
				container.style.left = '10px';
				break;
			}
			case 'bottom right': {
				container.style.bottom = '10px';
				container.style.right = '10px';
				break;
			}
			default:
				break;
		}
		elementRef.current = container;
		if (!__previewMode) {
			document.body.appendChild(container);
			setVisible(true);
			return () => {
				document.body.removeChild(container);
			};
		} else {
			setVisible(true);
		}
	}, [__previewMode]);
	if (elementRef.current && visible) {
		if (__previewMode) {
			return <div className="Pinpoint Relative">{children}</div>;
		}
		return createPortal(children, elementRef.current);
	}
	return null;
};

const NotificationPopup = (props: PopupProps) => {
	const { previewData, header, button, target, className = '' } = props;
	const { title, headline, url, coverMedia } = previewData;
	const { position = 'bottom right' } = target;
	const { title: headerTitle = 'New Updates' } = header ?? {};
	const {
		text: buttonText = 'See the Details',
		background: buttonBackground = 'rgb(243, 244, 246)',
		foreground: buttonForeground = 'black',
	} = button ?? {};
	const [visible, setVisible] = useState(true);
	const linkRef = useRef<any>();
	const onClose = () => {
		setVisible(false);
		props.onClose?.();
	};
	const onClickLink = () => {
		linkRef.current.click();
		onClose();
	};
	if (!visible) {
		return null;
	}
	return (
		<Relative position={position} __previewMode={props.__previewMode}>
			<div className={`Pinpoint Widget Popup ${className}`} style={{ width: '380px' }}>
				<div className="wrapper">
					<div className="header">
						<div className="title">{headerTitle}</div>
						<div className="close" onClick={onClose}>
							<FontAwesomeIcon icon={faTimes} />
						</div>
					</div>
					<div className="body">
						<Card.Container
							className="card"
							coverMedia={coverMedia}
							title={<Card.Title title={title} className="title" />}
							description={<Card.Description description={headline} className="headline" />}
							onClick={onClickLink}
						/>
					</div>
					<button style={{ backgroundColor: buttonBackground, color: buttonForeground }} onClick={onClickLink}>
						{buttonText}
					</button>
					<a ref={linkRef} href={url} rel="noopener" className="hidden" />
				</div>
			</div>
		</Relative>
	);
};

export default NotificationPopup;
