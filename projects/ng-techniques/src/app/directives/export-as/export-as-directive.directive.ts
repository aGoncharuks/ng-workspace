import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[exportAsDirective]',
  standalone: true,
	exportAs: 'exportAsDirective'
})
export class ExportAsDirective {
	@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
	
	setBackgroundColor(color: string): void {
		this.backgroundColor = color;
	}
}
