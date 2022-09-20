import { Route } from '@angular/router';

export const NODE_INJECTOR_ROUTES = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'content-children-by-provider'
	} as Route,
	{
		path: 'content-children-by-provider',
		loadComponent: () => import('./content-children-by-provider/content-children-by-provider.component').then(m => m.ContentChildrenByProviderComponent)
	},
	{
		path: 'attribute-decorator',
		loadComponent: () => import('./attribute-decorator/attribute-decorator.component').then(m => m.AttributeDecoratorComponent)
	},
];
