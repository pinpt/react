export interface SubscriptionInfo {
	subscriptions: { subscriptionId: string; siteId: string; createdAt: number; subscribed: boolean }[];
	sites: { [id: string]: { id: string; name: string; logoUrl?: string } };
}

export interface UpdateSubscriptionManagePayload {
	subscribed?: boolean;
	verified?: boolean;
	firstName?: string;
	lastName?: string;
	avatarUrl?: string;
}

export interface UpdateSubscriptionManageResponse {
	subscriptionId: string;
	verified?: boolean;
	subscribed?: boolean;
	firstName?: string;
	lastName?: string;
	avatarUrl?: string;
	siteId?: string;
}
