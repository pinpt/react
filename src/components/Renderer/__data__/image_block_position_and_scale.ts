export default {
	type: 'doc',
	content: [
		{
			type: 'paragraph',
			content: [
				{
					type: 'text',
					text:  '1500x1000 image. Rendered size is proprtional to scaled image size and container width.',
				}
			]
		},
		{
			type: 'paragraph',
			content: [
				{
					type: 'text',
					text:  '-'
				}
			]
		},
		{
			type: 'image_block',
			attrs: {
				src: 'https://file.pinpoint.com/3d35b6dad14ff02a57e4f12a3340a48b;UVHewn014n~qxuRjWBt700oexuRQt7ofayf6;1500x1000.png',
				scale: 0.30,
				align: 'left',
				alt: 'Left aligned, scale 30%'
			}
		},
		{
			type: 'image_block',
			attrs: {
				src: 'https://file.pinpoint.com/3d35b6dad14ff02a57e4f12a3340a48b;UVHewn014n~qxuRjWBt700oexuRQt7ofayf6;1500x1000.png',
				scale: 0.30,
				align: 'center',
				alt: 'Center aligned, scale 30%'
			}
		},
		{
			type: 'image_block',
			attrs: {
				src: 'https://file.pinpoint.com/3d35b6dad14ff02a57e4f12a3340a48b;UVHewn014n~qxuRjWBt700oexuRQt7ofayf6;1500x1000.png',
				scale: 0.30,
				align: 'right',
				alt: 'Right aligned, scale 30%'
			}
		},
		{
			type: 'image_block',
			attrs: {
				src: 'https://file.pinpoint.com/3d35b6dad14ff02a57e4f12a3340a48b;UVHewn014n~qxuRjWBt700oexuRQt7ofayf6;1500x1000.png',
				scale: 2,
				align: 'center',
				alt: 'Center aligned, scale 200%'
			}
		},
	]
};
