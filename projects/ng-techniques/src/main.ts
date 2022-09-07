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
				path: 'directives',
				loadChildren: () => import('./app/directives/directives.routes').then(m => m.DIRECTIVES_ROUTES)
			}
		]))
	]
}).catch(err => console.error(err));
