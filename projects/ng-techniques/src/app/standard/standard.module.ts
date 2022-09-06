import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/export-as/highlight.directive';

import { StandardRoutingModule } from './standard-routing.module';
import { StandardComponent } from './standard.component';


@NgModule({
  declarations: [
    StandardComponent
  ],
  imports: [
    CommonModule,
    StandardRoutingModule,
	  HighlightDirective
  ]
})
export class StandardModule { }
