import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'auto-unsubscribe',
		pathMatch: 'full'
	},
	{
		path: 'auto-unsubscribe',
		loadComponent: () => import('./auto-unsubscribe/auto-unsubscribe.component').then(m => m.AutoUnsubscribeComponent)
	}
];
