import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard',
  template: `
	  <div>Export as Example:</div>
    <div appHighlight #appHighlight="appHighlight">Text to highlight</div>
	  <button (click)="appHighlight.setBackgroundColor('yellow')">Highlight in yellow</button>
  `
})
export class StandardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
