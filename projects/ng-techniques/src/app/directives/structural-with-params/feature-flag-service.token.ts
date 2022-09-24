import { InjectionToken } from '@angular/core';
import { FeatureFlagService } from './feature-flag-service';

export const FEATURE_FLAGS_SERVICE = new InjectionToken('feature.flags.service', {
	factory: () => new FeatureFlagService()
});
