export const NODE_INJECTOR_ROUTES = [
	{
		path: 'content-children-by-provider',
		loadComponent: () => import('./content-children-by-provider/content-children-by-provider.component').then(m => m.ContentChildrenByProviderComponent)
	}
];
