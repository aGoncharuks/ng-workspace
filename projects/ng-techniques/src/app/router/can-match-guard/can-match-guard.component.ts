import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewPageStatusService } from './new-page-status.service';

@Component({
  selector: 'app-can-match-guard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
	  <div>Random new page status is: {{newPageStatusService.isReady$ | async}}</div>
	  <hr>
	  <div>Child route:</div>
	  <router-outlet></router-outlet>
	  <hr>
	  <div>Refresh the page to try different page status</div>
  `,
  styles: [
  ]
})
export class CanMatchGuardComponent {
	newPageStatusService = inject(NewPageStatusService);
}
