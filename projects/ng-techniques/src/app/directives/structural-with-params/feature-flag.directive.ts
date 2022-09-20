import { Directive, inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagService } from './feature-flag-service';

@Directive({
  selector: '[appIfFeatureFlag]',
	standalone: true
})
export class FeatureFlagDirective implements OnInit {
  @Input()
  appIfFeatureFlag!: string;
  @Input()
  appIfFeatureFlagElse?: TemplateRef<unknown>;

	private templateRef = inject(TemplateRef<unknown>);
	private viewContainerRef = inject(ViewContainerRef);
	private featureFlagService = inject(FeatureFlagService);
	
  async ngOnInit() {
		try {
	    const featureFlag = await this.featureFlagService.getFeatureFlag(this.appIfFeatureFlag);
			featureFlag ? this.onIf() : this.onElse();
		} catch (error) {
      this.onElse();
			console.error(error); // to be replaced with your error handling logic
		}
  }
	
  private onIf(): void {
    this.createView(this.templateRef);
  }

  private onElse(): void {
    if (!this.appIfFeatureFlagElse) {
      return;
    }
		
	  this.createView(this.appIfFeatureFlagElse);
	}

  private createView(templateRef: TemplateRef<unknown>): void {
    this.viewContainerRef.createEmbeddedView(templateRef);
  }
}
