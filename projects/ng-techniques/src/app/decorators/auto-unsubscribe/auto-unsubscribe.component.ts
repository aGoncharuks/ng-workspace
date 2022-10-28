import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { fromEvent, interval, Subscription, tap } from 'rxjs';
import { AutoUnsubscribe } from './auto-unsubscribe.decorator';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-auto-unsubscribe',
  standalone: true,
  imports: [CommonModule],
  template: `
	  <p>See AutoUnsubscribeComponent component class code for explanation</p>
  `,
  styles: [
  ]
})
@AutoUnsubscribe
export class AutoUnsubscribeComponent extends ParentComponent implements OnInit {
	private elementRef = inject(ElementRef);
	
	private firstSubscription$ = interval(2000).pipe(
		tap(() => console.log('Logging firstSubscription$ event'))
	).subscribe();
	
	private secondSubscription$ = fromEvent(this.elementRef.nativeElement, 'click', () => {
		console.log('Logging secondSubscription$ event');
	}).subscribe();
	
	private thirdSubscription$: Subscription | undefined;
	
	ngOnInit() {
		this.thirdSubscription$ = fromEvent(this.elementRef.nativeElement, 'click', () => {
			console.log('Logging thirdSubscription$ event');
		}).subscribe();
	}
}
