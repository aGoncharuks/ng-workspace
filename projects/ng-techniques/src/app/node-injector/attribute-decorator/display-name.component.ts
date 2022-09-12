import { Attribute, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class DisplayNameComponent implements OnInit {

  constructor(@Attribute('name') public name: string) { }

  ngOnInit(): void {
  }

}
