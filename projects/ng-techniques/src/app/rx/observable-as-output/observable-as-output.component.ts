import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnHoverDirective } from './on-hover.directive';

@Component({
  selector: 'app-observable-as-output',
  standalone: true,
	imports: [CommonModule, OnHoverDirective],
  template: `
    <div appOnHover (onHoverChange)="isHovered = $event">Hover me</div>
    <div>Child above is hovered: {{isHovered}}</div>
  `,
  styles: [
  ]
})
export class ObservableAsOutputComponent {
	isHovered = false;
}
