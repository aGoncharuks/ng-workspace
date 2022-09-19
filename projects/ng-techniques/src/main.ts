import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(RouterModule.forRoot([
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
		]))
	]
}).catch(err => console.error(err));
