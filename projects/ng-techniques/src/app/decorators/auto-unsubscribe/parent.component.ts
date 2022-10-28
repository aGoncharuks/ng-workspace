import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      parent works!
    </p>
  `,
  styles: [
  ]
})
export class ParentComponent {
	private parentSubscription$ = interval(2000).pipe(
		tap(() => console.log('Logging parentSubscription$ event'))
	).subscribe();
}
