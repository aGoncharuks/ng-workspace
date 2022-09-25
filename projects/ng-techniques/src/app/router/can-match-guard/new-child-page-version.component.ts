import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page-version',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      new page version works!
    </p>
  `,
  styles: [
  ]
})
export class NewChildPageVersionComponent {}


