import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Cat
    </p>
  `,
  styles: []
})
export class ChildCatComponent {}
