export default {
	type: 'doc',
	content: [
		{
			type: 'notice',
			attrs: {
				style: 'info',
			},
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'This is an info notice with monospaced font',
							marks: [
								{
									type: 'code_inline',
								},
							],
						},
					],
				},
			],
		},
	],
};
