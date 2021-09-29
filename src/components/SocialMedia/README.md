### The social component contains a number of sub-components for rendering social links.

[Full Docs](https://react.preview.pinpoint.com/?path=/docs/components-social) | [Github](https://github.com/pinpt/react/tree/master/src/components/SocialMedia)

#### Theming

The parent className for styling this component is `.Pinpoint.SocialMedia`

Each social icon has an additional `.ShareItem` or `.LinkItem` class applied as well as the name of the social network, such as `.Github`

<details>
	<summary>Base Theme Styles</summary>

```css
.Pinpoint.Footer .Pinpoint.SocialMedia {
	@apply mt-4 md:mt-1;
}

.Pinpoint.SocialMedia {
	@apply no-underline transition-all duration-200;
}

.Pinpoint.SocialMedia.Bar {
	@apply flex gap-x-4;
}

.Pinpoint.SocialMedia.Bar a:hover {
	filter: brightness(1.5);
}

.Pinpoint.SocialMedia.Bar.sharing {
	@apply flex gap-x-2;
}

.Pinpoint.SocialMedia.ShareItem {
	@apply flex flex-col items-center content-center justify-center rounded-lg w-8 h-8 text-white hover:filter-none;
}

.Pinpoint.SocialMedia.TwitterShare {
	@apply bg-[#55acee] hover:bg-[#2795e9];
}

.Pinpoint.SocialMedia.FacebookShare {
	@apply bg-[#3b5998] hover:bg-[#2d4373];
}

.Pinpoint.SocialMedia.LinkedInShare {
	@apply bg-[#0077b5] hover:bg-[#046293];
}

.Pinpoint.SocialMedia.EmailShare {
	@apply bg-gray-500 hover:bg-gray-600;
}

.Pinpoint .entryWrapper .sidebarWrapper.before .Clap,
.Pinpoint .entryWrapper .sidebarWrapper.before .SocialMedia.Bar,
.Pinpoint .entryWrapper .sidebarWrapper.before .Social.Bar {
	@apply hidden md:flex;
}
```

</details>
