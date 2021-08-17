#### The types for content analytics

<hr>
<br>

### `Analytics`

The mapping between a content entry id, and the clap counts and pageviews.

```ts
type Analytics = Record<string, { claps: number; pageviews: number }>;
```
