import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'observable-as-output',
		pathMatch: 'full'
	},
	{
		path: 'observable-as-output',
		loadComponent: () => import('./observable-as-output/observable-as-output.component').then(m => m.ObservableAsOutputComponent)
	}
];
