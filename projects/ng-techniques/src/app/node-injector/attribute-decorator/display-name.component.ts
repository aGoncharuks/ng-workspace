import { CommonModule } from '@angular/common';
import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-display-name',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      My <strong>name</strong> attribute's value is: {{name}}.
    </p>
    <div>This value is accessible in the components' constructor already.</div>
  `,
  styles: [
  ]
})
export class DisplayNameComponent {

  constructor(@Attribute('name') public name: string) { }
}
