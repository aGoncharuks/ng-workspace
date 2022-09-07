import { Component } from '@angular/core';
import { ExportAsDirective } from './export-as-directive.directive';

@Component({
	selector: 'app-highlight-directive-demo',
	template: `
    <div exportAsDirective #exportAsDirective="exportAsDirective">Text to highlight</div>
	  <button (click)="exportAsDirective.setBackgroundColor('yellow')">Highlight in yellow</button>
  `,
	standalone: true,
	imports: [ExportAsDirective]
})
export class ExportAsDirectiveComponent {}

