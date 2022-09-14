import { Injectable } from '@angular/core';

const FEATURE_FLAGS_MOCK: Record<string, boolean> = {
	FEATURE_1: true,
	FEATURE_2: false
}

@Injectable({providedIn: 'root'})
export class FeatureFlagService {
  public getFeatureStatus(featureFlag: string): Promise<boolean> {
		return Promise.resolve(FEATURE_FLAGS_MOCK[featureFlag]);
  }
}
