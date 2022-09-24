import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserAnimationsModule,
			RouterModule.forRoot([
				{
					path: 'components',
					loadChildren: () => import('./app/components/routes').then(m => m.ROUTES)
				},
				{
					path: 'directives',
					loadChildren: () => import('./app/directives/routes').then(m => m.ROUTES)
				},
				{
					path: 'node-injector',
					loadChildren: () => import('./app/node-injector/routes').then(m => m.NODE_INJECTOR_ROUTES)
				},
				{
					path: 'rx',
					loadChildren: () => import('./app/rx/routes').then(m => m.ROUTES)
				}
			])
		)
	]
}).catch(err => console.error(err));
