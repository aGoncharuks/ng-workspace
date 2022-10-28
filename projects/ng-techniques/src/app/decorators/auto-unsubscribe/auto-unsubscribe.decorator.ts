import { Subscription } from 'rxjs';

export function AutoUnsubscribe(componentConstructor: any) {
	
	const originalOnDestroy = componentConstructor.prototype.ngOnDestroy;
	
	componentConstructor.prototype.ngOnDestroy = function() {
	
		for (const key in this) {
			const property = this[key];
			if (property instanceof Subscription) {
				property?.unsubscribe();
			}
		}
		if (typeof originalOnDestroy !== 'function') { return; }
		originalOnDestroy.apply(this, arguments);
	}
}
