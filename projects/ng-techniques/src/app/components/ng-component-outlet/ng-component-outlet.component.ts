import { CommonModule } from '@angular/common';
import { Component, Injector, StaticProvider } from '@angular/core';
import { MY_SERVICE } from './my-service.token';
import { OptionOneComponent } from './option-one.component';
import { OptionTwoComponent } from './option-two.component';

type ComponentOption = {
	component: any,
	injector: Injector,
	content: any[][]
}
@Component({
  selector: 'app-ng-component-outlet',
  standalone: true,
  imports: [CommonModule],
  template: `
	  <div>Select the component to show:</div>
	  <button *ngFor="let option of componentOptions; index as i"
	          (click)="selectOption(option)">Option {{i + 1}}</button>
	  <hr>
	  <div *ngComponentOutlet="selectedOption.component; injector: selectedOption.injector; content: selectedOption.content"></div>
  `,
  styles: [
  ]
})
export class NgComponentOutletComponent {
	readonly componentOptions = [
		{
			component: OptionOneComponent,
			injector: this.createInjector( [{ provide: MY_SERVICE, useValue: 1 }] ),
			content: [
				[
					document.createTextNode('Content 1-1-1'),
					document.createTextNode('Content 1-1-2')
				],
				[
					document.createTextNode('Content 1-2')
				]
			]
		},
		{
			component: OptionTwoComponent,
			injector: this.createInjector( [{ provide: MY_SERVICE, useValue: 2 }] ),
			content: [
				[
					document.createTextNode('Content 2-1-1'),
					document.createTextNode('Content 2-1-2')
				],
				[
					document.createTextNode('Content 2-2')
				]
			]
		},
	];
	
	selectedOption: ComponentOption = this.componentOptions[0];
	
	selectOption(option: ComponentOption) {
		this.selectedOption = option;
	}
	
	private createInjector(providers: StaticProvider[]): Injector {
		return Injector.create({ providers })
	}
}
