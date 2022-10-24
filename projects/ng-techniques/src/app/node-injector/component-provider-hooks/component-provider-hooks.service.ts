import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	DoCheck,
	Injectable,
	OnChanges,
	OnDestroy,
	OnInit, SimpleChanges
} from '@angular/core';

@Injectable()
export class ComponentProviderHooksService implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
	
	ngAfterContentChecked(): void {
		console.log('--- ngAfterContentChecked --- called in service');
	}
	
	ngAfterContentInit(): void {
		console.log('--- ngAfterContentInit --- called in service');
	}
	
	ngAfterViewChecked(): void {
		console.log('--- ngAfterViewChecked --- called in service');
	}
	
	ngAfterViewInit(): void {
		console.log('--- ngAfterViewInit --- called in service');
	}
	
	ngDoCheck(): void {
		console.log('--- ngDoCheck --- called in service');
	}
	
	ngOnChanges(changes: SimpleChanges): void {
		console.log('--- ngOnChanges --- called in service');
	}
	
	ngOnDestroy(): void {
		console.log('--- ngOnDestroy --- called in service');
	}
	
	ngOnInit(): void {
		console.log('--- ngOnInit --- called in service');
	}
	
}
