import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-old-page-version',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      old-page-version works!
    </p>
  `,
  styles: [
  ]
})
export class OldChildPageVersionComponent {}
