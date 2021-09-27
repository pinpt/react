import React from 'react'; // don't remove
import {
	faDownload, faFile, faFileAlt, faFileArchive, faFileAudio, faFileCode, faFileExcel, faFilePdf,
	faFilePowerpoint, faFileVideo, faFileWord
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addFileExtension, isFileAPI } from '../../lib/file_metadata';
import { NodeProps } from './register';

export const iconForType = (type = '') => {
	if (/pdf/.test(type)) {
		return faFilePdf;
	}
	if (/zip|tar/.test(type)) {
		return faFileArchive;
	}
	if (/video/.test(type)) {
		return faFileVideo;
	}
	if (/audio/.test(type)) {
		return faFileAudio;
	}
	if (/excel|spreadsheet/.test(type)) {
		return faFileExcel;
	}
	if (/powerpoint/.test(type)) {
		return faFilePowerpoint;
	}
	if (/word/.test(type)) {
		return faFileWord;
	}
	if (/css|csv|graphql|html|java|json|php|python|typescript|xml/.test(type)) {
		return faFileCode;
	}
	if (/text/.test(type)) {
		return faFileAlt;
	}
	return faFile;
};

export const formattedSize = (size = 0) => {
	const kB = size / 1000;
	if (kB < 10) {
		return `${Math.round(kB * 10) / 10} KB`;
	}
	if (kB < 1000) {
		return `${Math.round(kB)} KB`;
	}
	const MB = kB / 1000;
	return `${Math.round(MB * 10) / 10} MB`;
};

export const Source = ({ current, type, src }: { current: string; type: string; src: string }) => {
	if (current === type) {
		return null;
	}
	return <source src={src} type={type} />;
};

const VideoFile = ({ node }: NodeProps) => {
	const { src, type } = node.attrs;
	const _isFileAPI = isFileAPI(src);
	return (
		<div className="Pinpoint video">
			<video controls>
				{_isFileAPI ? (
					<>
						<Source src={_isFileAPI ? addFileExtension(src, 'webm') : src} current={type} type="video/webm" />
						<Source src={_isFileAPI ? addFileExtension(src, 'ogg') : src} current={type} type="video/ogg" />
						<Source src={_isFileAPI ? addFileExtension(src, 'mp4') : src} current={type} type="video/mp4" />
						{type !== 'video/webm' && type !== 'video/ogg' && type !== 'video/mp4' && (
							<source src={src} type={type} />
						)}
					</>
				) : (
					<source src={src} type={type} />
				)}
				<DownloadFile node={node} />
			</video>
		</div>
	);
};

const AudioFile = ({ node }: NodeProps) => {
	const { src, type } = node.attrs;
	const _isFileAPI = isFileAPI(src);
	return (
		<div className="Pinpoint audio">
			<audio controls>
				{_isFileAPI ? (
					<>
						<Source src={_isFileAPI ? addFileExtension(src, 'mp3') : src} current={type} type="audio/mpeg" />
						<Source src={_isFileAPI ? addFileExtension(src, 'ogg') : src} current={type} type="audio/ogg" />
						<Source src={_isFileAPI ? addFileExtension(src, 'wav') : src} current={type} type="audio/wav" />
						{type !== 'audio/mpeg' && type !== 'audio/ogg' && type !== 'audio/wav' && (
							<source src={src} type={type} />
						)}
					</>
				) : (
					<source src={src} type={type} />
				)}
				<DownloadFile node={node} />
			</audio>
		</div>
	);
};

const DownloadFile = ({ node }: NodeProps) => {
	const { description, filename, size, src, type } = node.attrs;
	const onDownload = () => {
		if (src) {
			const u = new URL(src);
			u.searchParams.set('filename', filename);
			u.searchParams.set('disposition', 'attachment');
			const a = document.createElement('a');
			a.style.display = 'none';
			a.href = u.toString();
			// the filename you want
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			a.remove();
		}
	};

	return (
		<div className="file">
			<div className="container">
				<FontAwesomeIcon icon={iconForType(type)} />
				<div className="details">
					{src ? (
						<a href={src} target="_blank" rel="noopener noreferrer" className="filename">
							{filename}
						</a>
					) : (
						<div className="filename">{filename}</div>
					)}
					{description && <div className="description">{description}</div>}
					<div className="size">{formattedSize(size)}</div>
				</div>
				<div className="options">
					{src && (
						<div className="option group" onClick={onDownload}>
							<FontAwesomeIcon icon={faDownload} />
							<span>Download</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const File = ({ node }: NodeProps) => {
	const { type } = node.attrs;

	if (type.startsWith('video/')) {
		return <VideoFile node={node} />;
	}
	if (type.startsWith('audio/')) {
		return <AudioFile node={node} />;
	}

	return <DownloadFile node={node} />;
};

export default File;
