import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
	exportAs: 'appHighlight'
})
export class HighlightDirective {
	@HostBinding('style.backgroundColor') private backgroundColor: string = 'transparent';
	
  constructor() { }
	
	setBackgroundColor(color: string): void {
		this.backgroundColor = color;
	}
}
