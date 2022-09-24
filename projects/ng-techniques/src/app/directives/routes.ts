import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'export-as',
		pathMatch: 'full'
	},
	{
		path: 'export-as',
		loadComponent: () => import('./export-as/export-as-directive.component').then(m => m.ExportAsDirectiveComponent)
	},
	{
		path: 'structural-with-params',
		loadComponent: () => import('./structural-with-params/structural-with-params.component').then(m => m.StructuralWithParamsComponent)
	}
];
