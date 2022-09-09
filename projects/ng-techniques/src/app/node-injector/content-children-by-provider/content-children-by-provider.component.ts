import { Component } from '@angular/core';
import { ChildCatComponent } from './child-cat.component';
import { ChildDogComponent } from './child-dog.component';
import { ChildParrotComponent } from './child-parrot.component';
import { ChildStarlingComponent } from './child-starling.component';
import { ParentAnimalsComponent } from './parent-animals.component';

@Component({
  selector: 'app-content-children-by-provider',
  standalone: true,
	imports: [ChildCatComponent, ChildDogComponent, ChildParrotComponent, ChildStarlingComponent, ParentAnimalsComponent],
  template: `
	  <app-parent-animals>
		  <app-dog></app-dog>
		  <app-cat></app-cat>
		  <app-parrot></app-parrot>
		  <app-starling></app-starling>
	  </app-parent-animals>
  `,
  styles: []
})
export class ContentChildrenByProviderComponent {}

