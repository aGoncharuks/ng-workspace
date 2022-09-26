import { InjectionToken } from '@angular/core';
import { FeatureFlagServiceMock } from './feature-flag-service-mock.service';

export const FEATURE_FLAGS_SERVICE = new InjectionToken<FeatureFlagsService>('feature.flags.service', {
	factory: () => new FeatureFlagServiceMock()
});

export interface FeatureFlagsService {
	getFeatureFlag(flagName: string): Promise<boolean>;
}
