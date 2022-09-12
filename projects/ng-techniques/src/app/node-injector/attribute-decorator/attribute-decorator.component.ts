import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayNameComponent } from './display-name.component';

@Component({
  selector: 'app-attribute-decorator',
  standalone: true,
	imports: [CommonModule, DisplayNameComponent],
  template: `
	  <app-display-name name="Jim"></app-display-name>
  `,
  styles: [
  ]
})
export class AttributeDecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
