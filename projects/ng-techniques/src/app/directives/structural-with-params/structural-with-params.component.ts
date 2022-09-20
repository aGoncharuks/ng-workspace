import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeatureFlagDirective } from './feature-flag.directive';

@Component({
  selector: 'app-structural-with-params',
  standalone: true,
  imports: [CommonModule, FeatureFlagDirective],
  template: `
		<div *appIfFeatureFlag="'FEATURE_1'; else: defaultTemplate">Feature 1 template</div>
		<div *appIfFeatureFlag="'FEATURE_2'; else: defaultTemplate">Feature 2 template</div>
		<ng-template #defaultTemplate>Default template</ng-template>
  `,
  styles: [
  ]
})
export class StructuralWithParamsComponent {}
