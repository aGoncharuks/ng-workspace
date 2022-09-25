import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-another-child-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      another-child-page works!
    </p>
  `,
  styles: [
  ]
})
export class AnotherChildPageComponent {}
