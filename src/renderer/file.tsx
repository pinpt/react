import {
	faDownload, faFile, faFileAlt, faFileArchive, faFileAudio, faFileCode, faFileExcel, faFilePdf,
	faFilePowerpoint, faFileVideo, faFileWord
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NodeProps, registerNode } from './register';

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

const File = ({ node }: NodeProps) => {
	const { description, filename, publicUrl, size, type } = node.attrs;

	const onDownload = () => {
		if (publicUrl) {
			const u = new URL(publicUrl);
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
					{publicUrl ? (
						<a href={publicUrl} target="_blank" rel="noopener noreferrer" className="filename">
							{filename}
						</a>
					) : (
						<div className="filename">{filename}</div>
					)}
					{description && <div className="description">{description}</div>}
					<div className="size">{formattedSize(size)}</div>
				</div>
				<div className="options">
					{publicUrl && (
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

registerNode('file', (node) => <File node={node} />);
