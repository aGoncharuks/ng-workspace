import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	inject,
	OnChanges, OnDestroy,
	OnInit, SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentProviderHooksService } from './component-provider-hooks.service';

@Component({
  selector: 'app-component-provider-hooks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      See in console which hooks are being called in the host component vs component service. <br><br>
	    Navigate to different route to trigger <b>ngOnDestroy</b> - the only hook that will be called in the service.
    </p>
  `,
  styles: [
  ],
	providers: [ComponentProviderHooksService]
})
export class ComponentProviderHooksComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
	private componentProviderHooksService = inject(ComponentProviderHooksService);

	ngAfterContentChecked(): void {
		console.log('--- ngAfterContentChecked --- called in component');
	}
	
	ngAfterContentInit(): void {
		console.log('--- ngAfterContentInit --- called in component');
	}
	
	ngAfterViewChecked(): void {
		console.log('--- ngAfterViewChecked --- called in component');
	}
	
	ngAfterViewInit(): void {
		console.log('--- ngAfterViewInit --- called in component');
	}
	
	ngDoCheck(): void {
		console.log('--- ngDoCheck --- called in component');
	}
	
	ngOnChanges(changes: SimpleChanges): void {
		console.log('--- ngOnChanges --- called in component');
	}
	
	ngOnDestroy(): void {
		console.log('--- ngOnDestroy --- called in component');
	}
	
	ngOnInit(): void {
		console.log('--- ngOnInit --- called in component');
	}
}
