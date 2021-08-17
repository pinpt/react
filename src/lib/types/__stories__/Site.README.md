#### The types for the site data

<hr>
<br>

### `ISite`

The data for the site.

```ts
interface ISite {
	id: string;
	logoUrl?: string;
	mailingAddress?: string;
	url: string; // the canonical url for the site
	slug: string;
	name: string;
	theme?: {
		title?: string;
		tosLink?: string;
		social?: Record<string, string>;
		description?: string;
		copyright?: string;
		logoLink?: string;
		eulaLink?: string;
	};
}
```
