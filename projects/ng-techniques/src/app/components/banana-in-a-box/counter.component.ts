import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
		<button (click)="increment()">Increment in child</button>
		<button (click)="decrement()">Decrement in child</button>
  `,
  styles: [
  ]
})
export class CounterComponent {
	@Input()
	value = 0;
	
	@Output()
	valueChange = new EventEmitter<number>;
	
	increment() {
		this.changeValue(1);
	}
	
	decrement() {
		this.changeValue(-1);
	}
	
	private changeValue(delta: number) {
		this.value+= delta;
		this.valueChange.emit(this.value);
	}
}
