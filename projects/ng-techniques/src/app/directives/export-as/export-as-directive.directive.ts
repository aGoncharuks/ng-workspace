import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[exportAsDirective]',
  standalone: true,
	exportAs: 'exportAsDirective'
})
export class ExportAsDirective {
	@HostBinding('style.backgroundColor') private backgroundColor: string = 'transparent';
	
  constructor() { }
	
	setBackgroundColor(color: string): void {
		this.backgroundColor = color;
	}
}
