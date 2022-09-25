import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'can-match-guard',
		pathMatch: 'full'
	},
	{
		path: 'can-match-guard',
		loadChildren: () => import('./can-match-guard/routes').then(m => m.ROUTES)
	}
];
