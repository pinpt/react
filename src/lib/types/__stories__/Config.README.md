#### The types for the Pinpoint configuration

<hr>
<br>

### `IPinpointConfig`

The configuration for your site.

```ts
interface IPinpointConfig {
	slug: string;
	siteId: string;
	apihost?: string;
	siteUrl?: string;
	apiKey?: string;
	pageSize: number;
}
```
