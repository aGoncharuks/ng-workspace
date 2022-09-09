import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlyerBase } from './flyer.base';

@Component({
  selector: 'app-parrot',
  standalone: true,
  imports: [CommonModule],
	providers: [
		{
			provide: FlyerBase,
			useExisting: ChildParrotComponent
		}
	],
  template: `
    <p>
      Parrot
    </p>
  `,
  styles: []
})
export class ChildParrotComponent extends FlyerBase {
	
	get name() {
		return 'Parrot';
	}
}
