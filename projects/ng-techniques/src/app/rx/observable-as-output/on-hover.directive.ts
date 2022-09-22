import { Directive, ElementRef, inject, Output } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appOnHover]',
  standalone: true
})
export class OnHoverDirective {
	private elementRef = inject(ElementRef);
	
	@Output()
	onHoverChange: Observable<boolean> = merge(
		fromEvent(this.elementRef.nativeElement, 'mouseenter').pipe(
			map(() => true)
		),
		fromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(
			map(() => false)
		)
	);
}
