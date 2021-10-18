/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from 'react';
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
	return (
		<Modal
			visible={visible}
			className={`Widget Notification Modal ${coverMedia?.type ?? ''}`}
			__previewMode={props.__previewMode}
		>
			<div
				className="flex flex-col w-full h-full bg-white"
				style={{ minHeight: !coverMedia || coverMedia?.type === 'none' ? '185px' : '365px' }}
			>
				<div className="flex w-full flex-row items-center p-4 border-b">
					<div className="w-full font-semibold">{headerTitle}</div>
					<div
						className="ml-auto cursor-pointer text-gray-400 hover:text-gray-900"
						onClick={() => setVisible(false)}
					>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				<div className="flex flex-col w-full items-center">
					<Card.Container
						className="p-4"
						coverMedia={coverMedia}
						title={<Card.Title title={title} />}
						description={<Card.Description description={headline} />}
						onClick={onClickLink}
					/>
					<button
						className="border px-2 py-2 rounded-md text-sm font-semibold mb-4"
						style={{ backgroundColor: buttonBackground, color: buttonForeground }}
						onClick={onClickLink}
					>
						{buttonText}
					</button>
				</div>
				<div className="mt-auto border-t p-4 text-gray-400 bg-gray-50 text-sm w-full text-center">
					Want to see other updates? <br className="sm:hidden" /> Check out our{' '}
					<a href={siteUrl} target="_blank" rel="noopener" className="cursor-pointer underline">
						{footerTitle}
					</a>
				</div>
				<a ref={linkRef} href={url} rel="noopener" className="hidden" />
			</div>
		</Modal>
	);
};

export default NotificationModal;
