/* eslint-disable react/jsx-no-target-blank */
import React, { useCallback, useRef, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

import type { ICoverMedia } from '../../lib/types';

interface PageProps {
	previewData: {
		title: string;
		headline: string;
		url: string;
		siteUrl: string;
		coverMedia: ICoverMedia;
	};
	header: {
		title: string;
	};
	footer?: {
		title: string;
	};
	button?: {
		text: string;
		background?: string;
		foreground?: string;
	};
	onClose?: () => void;
	__previewMode?: boolean;
}

const NotificationModal = (props: PageProps) => {
	const linkRef = useRef<any>();
	const { previewData, button, header, footer } = props;
	const { title, headline, url, coverMedia, siteUrl } = previewData;
	const { title: headerTitle = 'New Updates' } = header ?? {};
	const { title: footerTitle = 'Changelog' } = footer ?? {};
	const {
		text: buttonText = 'See the Details',
		background: buttonBackground = 'rgb(243, 244, 246)',
		foreground: buttonForeground = 'black',
	} = button ?? {};
	const [visible, setVisible] = useState(true);
	const onClickLink = () => {
		setVisible(false);
		linkRef.current.click();
		props.onClose?.();
	};

	const handleClose = useCallback(() => {
		setVisible(false);
		props.onClose?.();
	}, [props.onClose]);

	return (
		<Modal
			visible={visible}
			className={`Pinpoint Widget Notification Modal covermedia-type-${coverMedia?.type ?? ''}`}
			__previewMode={props.__previewMode}
		>
			<div className="wrapper" style={{ minHeight: !coverMedia || coverMedia?.type === 'none' ? '185px' : '365px' }}>
				<div className="header">
					<div className="title">{headerTitle}</div>
					<div className="close" onClick={handleClose}>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				<div className="body">
					<Card.Container
						className="card"
						coverMedia={coverMedia}
						title={<Card.Title title={title} />}
						description={<Card.Description description={headline} />}
						onClick={onClickLink}
					/>
					<button style={{ backgroundColor: buttonBackground, color: buttonForeground }} onClick={onClickLink}>
						{buttonText}
					</button>
				</div>
				<div className="footer">
					Want to see other updates? <br /> Check out our{' '}
					<a href={siteUrl} target="_blank" rel="noopener">
						{footerTitle}
					</a>
				</div>
				<a ref={linkRef} href={url} rel="noopener" className="hidden" />
			</div>
		</Modal>
	);
};

export default NotificationModal;
