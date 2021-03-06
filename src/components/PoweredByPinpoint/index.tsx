import React from 'react';

export interface IPoweredByPinpointProps {
	siteId?: string;
}

const PoweredByPinpoint = (props: IPoweredByPinpointProps) => {
	const { siteId } = props;

	return (
		<a
			className="Pinpoint PoweredByPinpoint"
			href={`https://pinpoint.com/?utm_source=referral&utm_medium=web&utm_campaign=${siteId}`}
			style={{ display: 'flex', alignItems: 'center', margin: 'auto', textDecoration: 'none', color: 'inherit' }}
		>
			<span>We run on</span>
			<svg
				style={{ margin: '0 4px', color: 'rgba(55,48,163, 1)' }}
				width="22"
				height="21"
				viewBox="0 0 277 297"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				role="img"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M95.7878 296.635H128.664V296.654C210 296.654 276.157 230.116 276.157 148.332C276.157 66.5476 210 0.00958123 128.659 0H128.483L118.744 0.114995C53.2636 0.1677 0 53.7546 0 119.617C0.000695153 144.543 7.7522 168.845 22.1694 189.121C36.5867 209.397 56.9479 224.632 80.4028 232.694L80.541 232.732V281.302C80.541 285.369 82.1474 289.269 85.0067 292.144C87.866 295.019 91.7441 296.635 95.7878 296.635ZM118.996 31.8291L128.749 31.7141C193.243 31.762 245.702 84.5199 245.702 149.414C245.702 214.309 193.196 267.105 128.664 267.105H110.996V237.495H130.698C175.266 237.495 211.525 201.032 211.525 156.213V150.272C211.525 111.011 179.759 79.0673 140.718 79.0673H95.783C91.7393 79.0673 87.8612 80.6827 85.0019 83.5581C82.1426 86.4335 80.5362 90.3333 80.5362 94.3998V175.312C85.8678 181.89 96.8264 186.687 106.832 186.96H110.996V109.713H140.704C151.401 109.724 161.658 114.003 169.222 121.609C176.787 129.215 181.043 139.529 181.055 150.286V156.213C181.04 169.647 175.726 182.525 166.278 192.022C156.831 201.518 144.023 206.858 130.665 206.868H103.773C94.9191 206.378 86.2752 203.967 78.435 199.801C49.3804 184.943 30.4411 154.886 30.4411 120.704C30.4411 71.6982 70.0874 31.8291 118.82 31.8291H118.996Z"
					fill="currentColor"
				></path>
			</svg>
			<span style={{ color: 'white', mixBlendMode: 'difference' }}>Pinpoint</span>
		</a>
	);
};

export default PoweredByPinpoint;
