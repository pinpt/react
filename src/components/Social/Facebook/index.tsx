import ActionLink from '../../Internal/ActionLink';
import { ISocialProps } from '../types';

const Facebook = (props: ISocialProps) => {
	const { className = '', sharing, ...rest } = props;

	return (
		<ActionLink className={`Social Item Facebook ${sharing ? 'sharing' : ''} ${className}`} {...rest}>
			{sharing ? (
				<svg
					width={10}
					height={16}
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="facebook-f"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
				>
					<path
						fill="currentColor"
						d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
					></path>
				</svg>
			) : (
				<svg
					width={14}
					height={14}
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="facebook"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="currentColor"
						d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
					></path>
				</svg>
			)}
		</ActionLink>
	);
};

export default Facebook;
