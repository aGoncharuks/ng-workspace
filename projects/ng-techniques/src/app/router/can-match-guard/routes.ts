import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { NewPageStatusService } from './new-page-status.service';

export const ROUTES: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'can-match-guard'
	},
	{
		path: 'can-match-guard',
		loadComponent: () => import('./can-match-guard.component').then(m => m.CanMatchGuardComponent),
		loadChildren: () => [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'child-page'
			},
			{
				path: 'child-page',
				canMatch: [() => inject(NewPageStatusService).isReady$],
				loadComponent: () => import('./new-child-page-version.component').then(m => m.NewChildPageVersionComponent)
			},
			{
				path: 'child-page',
				loadComponent: () => import('./old-child-page-version.component').then(m => m.OldChildPageVersionComponent)
			},
			{
				path: 'another-child-page',
				loadComponent: () => import('./another-child-page.component').then(m => m.AnotherChildPageComponent)
			}
		]
	}
];
