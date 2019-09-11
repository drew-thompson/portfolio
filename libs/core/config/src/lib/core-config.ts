import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Defines a policy for loading translation files using HttpClient.
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

/**
 * Injection token for an app's environment file.
 * This **must be provided** in each app's `app.module.ts`.
 *
 * @example
 * providers: [
 *  { provide: ENVIRONMENT, useValue: environment }
 * ]
 */
export const ENVIRONMENT = new InjectionToken<string>('environment');
