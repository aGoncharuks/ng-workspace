import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MY_SERVICE } from './my-service.token';

@Component({
  selector: 'app-option-one',
  standalone: true,
  imports: [CommonModule],
  template: `
		<div>Option 1 component</div>
		<div>My service value is: {{myService}}</div>
		Projected content is:
		<div>
			<ng-content></ng-content>
		</div>
		<div>
			<ng-content></ng-content>
		</div>
  `,
  styles: [
  ]
})
export class OptionOneComponent {
	readonly myService = inject(MY_SERVICE);
}
