import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MapPipe, MapPipeFn } from './map.pipe';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, MapPipe],
  template: `
	  <div *ngFor="let item of items | map : pickFirstN : 4">{{item}}</div>
	  <button (click)="appendToTheStartNonMutating()">Append item at the end (non mutating)</button>
	  <button (click)="appendToTheStartMutating()">Append item at the start (mutating)</button>
  `,
  styles: [
  ]
})
export class MapComponent {
	items = [1, 2, 3, 4, 5, 6, 7, 8];
	readonly pickFirstN: MapPipeFn<number[], number[]> = (input, n: number) => {
		console.log('map function running');
		return input.slice(0, n);
	}
	
	appendToTheStartMutating(): void {
		this.items = [7, ...this.items];
	}
	
	appendToTheStartNonMutating(): void {
		this.items.unshift(7);
	}
	
}


