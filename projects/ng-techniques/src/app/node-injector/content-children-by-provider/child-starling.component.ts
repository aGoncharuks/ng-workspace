import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlyerBase } from './flyer.base';

@Component({
  selector: 'app-starling',
  standalone: true,
  imports: [CommonModule],
	providers: [
		{
			provide: FlyerBase,
			useExisting: ChildStarlingComponent
		}
	],
  template: `
    <p>
      Starling
    </p>
  `,
  styles: []
})
export class ChildStarlingComponent extends FlyerBase {
	
	get name() {
		return 'Starling';
	}
}
