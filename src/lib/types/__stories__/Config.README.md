#### The types for the Pinpoint configuration

<hr>
<br>

### `IPinpointConfig`

The mapping between a content entry id, and the clap counts and pageviews.

```ts
interface IPinpointConfig {
	slug: string;
	siteId: string;
	apihost?: string;
	siteUrl?: string;
	pageSize: number;
}
```
