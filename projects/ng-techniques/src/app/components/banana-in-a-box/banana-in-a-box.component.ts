import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-banana-in-a-box',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  template: `
		<app-counter [(value)]="valueInParent"></app-counter>
		<div>Value in parent: {{valueInParent}}</div>
  `,
  styles: [
  ]
})
export class BananaInABoxComponent {
	valueInParent = 5;
	
	onValueChangeInChild(value: number) {
		console.log(value);
	}
}
