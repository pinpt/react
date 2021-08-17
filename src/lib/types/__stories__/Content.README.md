#### The types for entry content

<hr>
<br>

### `CoverMediaType`

The type of cover media for the entry.

```ts
enum CoverMediaType {
	None = 'none',
	Video = 'video',
	Image = 'image',
	Youtube = 'youtube',
}
```

### `ICoverMedia`

The cover media for the entry.

```ts
interface ICoverMedia {
	type: CoverMediaType;
	placeholderImage: string;
	value: string;
	metadata?: Record<string, any>;
}
```

### `ContentTemplateType`

The type of content in the entry.

```ts
enum ContentTemplateType {
	Changelog = 'changelog',
}
```

### `ContentDocument`

An alias to `any` to represent the document.

```ts
type ContentDocument = any;
```

### `IUser`

A user who worked on the document.

```ts
interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	avatarUrl?: string;
}
```

### `IContent`

A single content entry.

```ts
interface IContent {
	id: string;
	type: ContentTemplateType; // the type of content
	commit: string; // the commit for the content
	document: ContentDocument;
	url: string; // the canonical url to the content
	dateAt: number; // the date used for purposes of sorting
	publishedAt: number;
	tags?: string[];
	title: string;
	headline: string;
	authors: IUser[];
	coverMedia?: ICoverMedia;
}
```
