import { Routes } from '@angular/router';

export const DIRECTIVES_ROUTES: Routes = [
	{
		path: 'export-as',
		loadComponent: () => import('./export-as/export-as-directive.component').then(m => m.ExportAsDirectiveComponent)
	},
	{
		path: 'structural-with-params',
		loadComponent: () => import('./structural-with-params/structural-with-params.component').then(m => m.StructuralWithParamsComponent)
	}
];
