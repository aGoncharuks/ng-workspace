import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Dog
    </p>
  `,
  styles: []
})
export class ChildDogComponent {}
