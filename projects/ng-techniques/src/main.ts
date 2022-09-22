import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ExamplesComponent } from './app/examples/examples.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(ExamplesComponent, {
	providers: [
		importProvidersFrom(
			BrowserAnimationsModule,
			RouterModule.forRoot([
				{
					path: 'components',
					loadChildren: () => import('./app/components/components.routes').then(m => m.COMPONENTS_ROUTES)
				},
				{
					path: 'directives',
					loadChildren: () => import('./app/directives/directives.routes').then(m => m.DIRECTIVES_ROUTES)
				},
				{
					path: 'node-injector',
					loadChildren: () => import('./app/node-injector/node-injector.routes').then(m => m.NODE_INJECTOR_ROUTES)
				},
				{
					path: 'rx',
					loadChildren: () => import('./app/rx/rx.routes').then(m => m.RX_ROUTES)
				}
			])
		)
	]
}).catch(err => console.error(err));
