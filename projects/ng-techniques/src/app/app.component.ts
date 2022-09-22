import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
	standalone: true,
	imports: [MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatIconModule, CommonModule, RouterOutlet, LetModule],
  template: `
    <mat-sidenav-container *ngrxLet="isHandset$ as isHandset" class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport
          [attr.role]="isHandset ? 'dialog' : 'navigation'"
          [mode]="isHandset ? 'over' : 'side'"
          [opened]="isHandset === false">
        <mat-toolbar>Menu</mat-toolbar>
        <mat-nav-list>
          <a *ngFor="let route of routes" mat-list-item href="{{route.path}}">{{route.name}}</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	private router = inject(Router);
	private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
	
	get routes() {
		return this.router.config.map((({ path }) => ({
			path,
			name: path
		})));
	}
}
