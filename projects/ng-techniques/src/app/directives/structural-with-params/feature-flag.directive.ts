import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagService } from './feature-flag-service.interface';

@Directive({
  selector: '[appIfFeatureFlag]',
	standalone: true
})
export class FeatureFlagDirective implements OnInit {

  @Input()
  appIfFeatureFlag!: string;

  @Input()
  appIfFeatureFlagElse?: TemplateRef<unknown>;

  constructor(
    private featureFlagService: FeatureFlagService,
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.getFeatureFlag()
      .then(result => result ? this.onIf() : this.onElse())
      .catch(error => {
        this.onElse();
				console.error(error); // to be replaced with your error handling logic
      });
  }


  private getFeatureFlag(): Promise<boolean> {
    return this.featureFlagService.getFeatureStatus(this.appIfFeatureFlag);
  }
	
  private clearView(): void {
    this.viewContainerRef.clear();
  }

  private createView(templateRef: TemplateRef<unknown>): void {
    this.viewContainerRef.createEmbeddedView(templateRef);
  }

  private onIf(): void {
    this.createView(this.templateRef);
  }

  private onElse(): void {
    if (this.appIfFeatureFlagElse) {
      this.createView(this.appIfFeatureFlagElse);
      return;
    }

    this.clearView();
  }
}
