import { CommonModule } from '@angular/common';
import { Component, ContentChildren, QueryList } from '@angular/core';
import { FlyerBase } from './flyer.base';

@Component({
  selector: 'app-parent-animals',
  standalone: true,
  imports: [CommonModule],
  template: `
		<ng-content></ng-content>
		<div>These child elements are flyers: </div>
		<div *ngFor="let flyer of flyers">{{flyer.name}}</div>
  `,
  styles: []
})
export class ParentAnimalsComponent {
	@ContentChildren(FlyerBase) readonly flyers?: QueryList<FlyerBase>;
}
