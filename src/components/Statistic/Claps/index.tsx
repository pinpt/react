import { compactNumber } from '../../../lib/string';
import { IStatisticProps } from '../types';
import React from 'react';

const Claps = (props: IStatisticProps) => {
	const { count, className } = props;
	return (
		<div className={`Pinpoint Statistic Claps wrapper ${className ?? ''}`}>
			<svg
				width="32"
				height="32"
				viewBox="0 0 985 997"
				stroke="currentColor"
				strokeWidth="2"
				fill="currentColor"
				strokeLinecap="round"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M384.602 300.771L374.481 280.34C355.482 241.988 303.813 234.105 275.654 266.246C233.852 226.468 167.893 261.376 175.201 316.902C133.778 319.79 107.584 364.684 126.716 403.304L191.394 533.862C167.122 530.597 142.57 542.537 130.768 565.569C115.633 594.94 127.083 631.118 156.274 646.565L345.7 747.352C352.529 750.999 360.713 751.074 367.613 747.656L575.681 644.581C585.717 639.609 590.991 628.403 588.392 617.526L556.335 482.08C552.812 467.309 547.677 452.89 540.885 439.18L480.381 317.045C461.959 279.858 412.882 272.253 384.602 300.771ZM512.211 453.385C517.893 464.855 522.231 476.99 525.137 489.389L555.696 618.658L357.037 717.072L171.27 618.267C157.613 610.972 152.13 593.823 159.202 580.164C166.184 566.55 182.885 561.29 196.543 568.585L239.392 591.328C246.221 594.975 253.761 587.669 250.298 580.679L155.391 389.099C138.522 355.048 188.653 331.442 205.344 365.134L275.836 507.43C277.79 511.373 282.614 513.001 286.556 511.048L292.918 507.896C296.861 505.943 298.489 501.119 296.536 497.176L209.619 321.725C192.75 287.674 242.881 264.067 259.572 297.76L346.134 472.494C348.087 476.437 352.911 478.064 356.854 476.111L363.216 472.959C367.158 471.006 368.786 466.182 366.833 462.24L295.675 318.599C278.806 284.548 328.937 260.942 345.628 294.634L416.52 437.737C418.473 441.679 423.297 443.307 427.24 441.354L433.602 438.202C437.545 436.249 439.172 431.425 437.219 427.482L402.15 356.693C385.459 323 434.569 297.333 451.482 331.473L511.942 453.518L512.211 453.385Z" />
				<path d="M600.843 300.62L610.964 280.189C629.963 241.837 681.632 233.954 709.791 266.095C751.593 226.317 817.553 261.225 810.244 316.751C851.667 319.639 877.861 364.532 858.729 403.153L794.051 533.711C818.323 530.446 842.875 542.386 854.677 565.418C869.812 594.789 858.362 630.967 829.171 646.414L639.745 747.201C632.916 750.848 624.732 750.923 617.832 747.505L473.503 677C463.467 672.028 573.316 628.993 575.914 618.116L548.226 487C551.749 472.229 475.208 378.693 482 364.983L505.064 316.894C523.486 279.707 572.563 272.102 600.843 300.62ZM505.064 388.948C499.382 400.418 580.906 616.601 578 629L505.064 657L628.408 716.921L814.175 618.116C827.833 610.821 833.315 593.672 826.243 580.013C819.261 566.399 802.56 561.139 788.902 568.434L746.053 591.177C739.225 594.824 731.684 587.518 735.147 580.528L830.054 388.948C846.923 354.897 796.792 331.291 780.101 364.983L709.609 507.279C707.655 511.222 702.831 512.85 698.889 510.897L692.527 507.745C688.584 505.792 686.956 500.968 688.909 497.025L775.826 321.574C792.695 287.523 742.564 263.916 725.873 297.609L639.311 472.343C637.358 476.286 632.534 477.913 628.591 475.96L622.229 472.808C618.287 470.855 616.659 466.031 618.612 462.089L689.77 318.448C706.639 284.397 656.508 260.791 639.817 294.483L568.925 437.586C566.972 441.528 562.148 443.156 558.205 441.203L551.843 438.051C547.901 436.098 546.273 431.274 548.226 427.331L583.295 356.542C599.986 322.849 550.876 297.182 533.963 331.322L505.064 388.948Z" />
				<rect
					x="269.491"
					y="33"
					width="150"
					height="28.7675"
					rx="14.3837"
					transform="rotate(54.7453 269.491 33)"
					opacity="0.5"
				/>
				<rect
					width="150"
					height="28.7675"
					rx="14.3837"
					transform="matrix(-0.577211 0.816595 0.816595 0.577211 763 33)"
					opacity="0.5"
				/>
				<rect
					width="150"
					height="28.7675"
					rx="14.3837"
					transform="matrix(-4.37114e-08 1 1 4.37114e-08 502 0)"
					opacity="0.5"
				/>
				<rect
					width="150"
					height="28.7675"
					rx="14.3837"
					transform="matrix(0.577211 -0.816595 -0.816595 -0.577211 269.491 963.924)"
					opacity="0.5"
				/>
				<rect
					x="763"
					y="963.924"
					width="150"
					height="28.7675"
					rx="14.3837"
					transform="rotate(-125.255 763 963.924)"
					opacity="0.5"
				/>
				<rect
					x="502"
					y="996.924"
					width="150"
					height="28.7675"
					rx="14.3837"
					transform="rotate(-90 502 996.924)"
					opacity="0.5"
				/>
			</svg>
			<span className="Statistic Claps count">{compactNumber(count)}</span>
		</div>
	);
};

export default Claps;
