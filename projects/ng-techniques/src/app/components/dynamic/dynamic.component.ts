import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  template: `
	  <button (click)="loadComponent('WITH_SELECTOR')">Load component with selector</button>
	  <button (click)="loadComponent('WITHOUT_SELECTOR')">Load component without selector</button>
		<ng-template #dynamicComponentHost></ng-template>
  `,
  styles: [
  ]
})
export class DynamicComponent {
	private COMPONENTS_REGISTRY: Record<string, Promise<any>> = {
		WITH_SELECTOR: import('./with-selector.component').then(module => module.WithSelectorComponent),
		WITHOUT_SELECTOR: import('./without-selector.component').then(module => module.WithoutSelectorComponent)
	};
	
	@ViewChild('dynamicComponentHost', {read: ViewContainerRef}) private dynamicComponentHost!: ViewContainerRef;
	
	
	async loadComponent(componentKey: string): Promise<ComponentRef<unknown>> {
		const component = await this.COMPONENTS_REGISTRY[componentKey];
		this.dynamicComponentHost.clear();
		return this.dynamicComponentHost.createComponent(component);
	}
}
