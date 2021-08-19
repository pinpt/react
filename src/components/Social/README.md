### The social component contains a number of sub-components for rendering social links.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-social) | [Github](https://github.com/pinpt/react/tree/master/src/components/Social)

#### Theming

The parent className for styling this component is `.Social`

Each social icon has an additional `.Item` class applied as well as the name of the social network, such as `.Github`

<details>
	<summary>Base Theme Styles</summary>

```css
.Footer .Social {
	@apply mt-4 md:mt-1;
}

.Social {
	@apply no-underline transition-all duration-200;
}

.Social.Bar {
	@apply flex gap-x-4;
}

.Social.Bar a:hover {
	filter: brightness(1.5);
}

.Social.Bar.sharing {
	@apply flex gap-x-2;
}

.Social.Item.sharing {
	@apply flex flex-col items-center content-center justify-center rounded-lg w-8 h-8 text-white hover:filter-none;
}

.Social.sharing.Twitter {
	@apply bg-[#55acee] hover:bg-[#2795e9];
}

.Social.sharing.Facebook {
	@apply bg-[#3b5998] hover:bg-[#2d4373];
}

.Social.sharing.LinkedIn {
	@apply bg-[#0077b5] hover:bg-[#046293];
}

.Social.sharing.Email {
	@apply bg-gray-500 hover:bg-gray-600;
}

.entryWrapper .sidebarWrapper.before .Clap,
.entryWrapper .sidebarWrapper.before .Social.Bar {
	@apply hidden md:flex;
}
```

</details>
