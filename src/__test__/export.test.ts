import * as Exports from '../';

const {
	DocumentationCard,
	DocumentationOutline,
	PrebuiltDocumentationHome,
	PrebuiltDocumentationSearchResults,
	DocumentationTitle,
	DocumentationHome,
	DocumentationSearchResults,
	Statistic,
	Banner,
	Clap,
	Content,
	Card,
	DateLabel,
	Document,
	Error,
	Logo,
	Copyright,
	Subscribe,
	SubscribeForm,
	Social,
	SocialMediaBar,
	FacebookLink,
	FacebookShare,
	TwitterLink,
	TwitterShare,
	LinkedInLink,
	LinkedInShare,
	EmailShare,
	InstagramLink,
	GithubLink,
	RSSLink,
	Footer,
	Latest,
	Recent,
	DashboardPage,
	EntryPage,
	ErrorPage,
	Header,
	PrebuiltEntry,
	PrebuiltError,
	PrebuiltFooter,
	PrebuiltHeader,
	PrebuiltHome,
	PrebuiltSearchResults,
	Tags,
	ThemeToggle,
	Author,
	Sidebar,
	Search,
	Loader,
	Pagination,
	Head,
	Image,
	PoweredByPinpoint,
	Pinpoint,
	emptyDoc,
	fetchContent,
	CoverMediaType,
	ContentTemplateType,
	slugifyContent,
	slugifyString,
	configFromSite,
	fetchSite,
	fetchSiteWithContentCount,
	splitEntries,
	getTagColorStyles,
	colorForString,
	useSearch,
	fetchAnalytics,
	fetchContentAnalytics,
	fetchContentPaginated,
	fetchDocumentMap,
	fetchClaps,
	createClap,
	executeAPI,
	formatNumber,
	compactNumber,
	getTwitterProfileFromURL,
	cancelEvent,
	getQueryString,
	titleCase,
	isSubscriberCookieSet,
	getSubscriberId,
	subscribe,
	validateEmail,
	useContent,
	useEntries,
	useScriptLoader,
	useBackground,
	getDocumentHeadings,
	getRouterRelativePath,
	getSiteAnalyticsURL,
	getSiteRSSURL,
	MostRecentPostsWidget,
	NotificationModalWidget,
	NotificationPopupWidget,
	NotificationBannerWidget,
	validateSubscription,
	...otherExports
} = Exports;

test('Test component exports', () => {
	// Test Statistic Exports
	expect(Statistic).toBeTruthy();
	const { Bar: StatisticBar, Claps, Views, ...otherStatistic } = Statistic;
	expect(StatisticBar).toBeTruthy();
	expect(Claps).toBeTruthy();
	expect(Views).toBeTruthy();
	expect(Object.keys(otherStatistic).length).toEqual(0);

	// Test Card exports
	expect(Card).toBeTruthy();
	const { Title, Description, Container, ReadButton, ...otherCard } = Card;
	expect(Title).toBeTruthy();
	expect(Description).toBeTruthy();
	expect(Container).toBeTruthy();
	expect(Date).toBeTruthy();
	expect(ReadButton).toBeTruthy();
	expect(Object.keys(otherCard).length).toEqual(0);

	// Test Social exports
	expect(Social).toBeTruthy();
	const { Bar: SocialBar, Facebook, Github, Instagram, LinkedIn, RSS, Twitter, Email, ...otherSocial } = Social;
	expect(SocialBar).toBeTruthy();
	expect(Facebook).toBeTruthy();
	expect(Github).toBeTruthy();
	expect(Instagram).toBeTruthy();
	expect(LinkedIn).toBeTruthy();
	expect(RSS).toBeTruthy();
	expect(Twitter).toBeTruthy();
	expect(Email).toBeTruthy();
	expect(Object.keys(otherSocial).length).toEqual(0);

	// Test Page Exports
	expect(DashboardPage).toBeTruthy();
	expect(EntryPage).toBeTruthy();
	expect(ErrorPage).toBeTruthy();

	// Test Tags Exports
	expect(Tags).toBeTruthy();
	const { Bar: TagBar, Item: TagItem, ...otherTags } = Tags;
	expect(TagBar).toBeTruthy();
	expect(TagItem).toBeTruthy();
	expect(Object.keys(otherTags).length).toEqual(0);

	// Test Prebuilt Exports
	expect(PrebuiltEntry).toBeTruthy();
	expect(PrebuiltError).toBeTruthy();
	expect(PrebuiltFooter).toBeTruthy();
	expect(PrebuiltHeader).toBeTruthy();
	expect(PrebuiltSearchResults).toBeTruthy();
	expect(PrebuiltHome).toBeTruthy();

	// Test Search Exports
	expect(Search).toBeTruthy();
	const { Results: SearchResults, Bar: SearchBar, Query, ...otherSearch } = Search;
	expect(SearchResults).toBeTruthy();
	expect(SearchBar).toBeTruthy();
	expect(Query).toBeTruthy();
	expect(Object.keys(otherSearch).length).toEqual(0);

	// Test Documentation Exports
	expect(DocumentationOutline).toBeTruthy();
	expect(DocumentationCard).toBeTruthy();
	expect(DocumentationTitle).toBeTruthy();
	expect(DocumentationHome).toBeTruthy();
	expect(DocumentationSearchResults).toBeTruthy();
	expect(PrebuiltDocumentationHome).toBeTruthy();
	expect(PrebuiltDocumentationSearchResults).toBeTruthy();

	// Test other component exports
	expect(Clap).toBeTruthy();
	expect(Content).toBeTruthy();
	expect(Document).toBeTruthy();
	expect(Logo).toBeTruthy();
	expect(Copyright).toBeTruthy();
	expect(DateLabel).toBeTruthy();
	expect(Error).toBeTruthy();
	expect(Subscribe).toBeTruthy();
	expect(Footer).toBeTruthy();
	expect(Latest).toBeTruthy();
	expect(Recent).toBeTruthy();
	expect(Head).toBeTruthy();
	expect(Header).toBeTruthy();
	expect(ThemeToggle).toBeTruthy();
	expect(Author).toBeTruthy();
	expect(Sidebar).toBeTruthy();
	expect(Loader).toBeTruthy();
	expect(Pagination).toBeTruthy();
	expect(PoweredByPinpoint).toBeTruthy();
	expect(Pinpoint).toBeTruthy();
	expect(Banner).toBeTruthy();
	expect(isSubscriberCookieSet).toBeTruthy();
	expect(subscribe).toBeTruthy();
});

test('Test util exports', () => {
	expect(emptyDoc).toBeTruthy();
	expect(fetchContent).toBeTruthy();
	expect(CoverMediaType).toBeTruthy();
	expect(ContentTemplateType).toBeTruthy();
	expect(slugifyContent).toBeTruthy();
	expect(slugifyString).toBeTruthy();
	expect(fetchSite).toBeTruthy();
	expect(fetchSiteWithContentCount).toBeTruthy();
	expect(fetchDocumentMap).toBeTruthy();
	expect(splitEntries).toBeTruthy();
	expect(getTagColorStyles).toBeTruthy();
	expect(colorForString).toBeTruthy();
	expect(fetchAnalytics).toBeTruthy();
	expect(fetchContentAnalytics).toBeTruthy();
	expect(createClap).toBeTruthy();
	expect(formatNumber).toBeTruthy();
	expect(compactNumber).toBeTruthy();
	expect(getTwitterProfileFromURL).toBeTruthy();
	expect(cancelEvent).toBeTruthy();
	expect(getQueryString).toBeTruthy();
	expect(getDocumentHeadings).toBeTruthy();
	expect(titleCase).toBeTruthy();
	expect(validateSubscription).toBeTruthy();
});

test('Test hook exports', () => {
	expect(useContent).toBeTruthy();
	expect(useEntries).toBeTruthy();
	expect(useSearch).toBeTruthy();
	expect(useScriptLoader).toBeTruthy();
	expect(useBackground).toBeTruthy();
});

test('Test widget exports', () => {
	expect(MostRecentPostsWidget).toBeTruthy();
	expect(NotificationModalWidget).toBeTruthy();
	expect(NotificationPopupWidget).toBeTruthy();
	expect(NotificationBannerWidget).toBeTruthy();
});

test('Test for unexpected exports', () => {
	// console.log(Object.keys(otherExports));
	expect(Object.keys(otherExports).length).toEqual(0);
});
