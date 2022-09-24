import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'dynamic',
		pathMatch: 'full'
	},
	{
		path: 'dynamic',
		loadComponent: () => import('./dynamic/dynamic.component').then(m => m.DynamicComponent)
	}
];
