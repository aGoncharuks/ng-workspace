import { Routes } from '@angular/router';

export const COMPONENTS_ROUTES: Routes = [
	{
		path: 'dynamic',
		loadComponent: () => import('./dynamic/dynamic.component').then(m => m.DynamicComponent)
	}
];
