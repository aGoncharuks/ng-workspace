import { Injectable } from '@angular/core';
import { FeatureFlagsService } from './feature-flag-service.token';

const FEATURE_FLAGS_MOCK: Record<string, boolean> = {
	FEATURE_1: true,
	FEATURE_2: false
}

@Injectable({providedIn: 'root'})
export class FeatureFlagServiceMock implements FeatureFlagsService {
  public getFeatureFlag(featureFlag: string): Promise<boolean> {
		return Promise.resolve(FEATURE_FLAGS_MOCK[featureFlag]);
  }
}
