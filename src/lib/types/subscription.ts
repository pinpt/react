export interface SubscriptionInfo {
	subscriptions: { subscriptionId: string; siteId: string; createdAt: number; subscribed: boolean }[];
	sites: { [id: string]: { id: string; name: string; logoUrl?: string } };
}
