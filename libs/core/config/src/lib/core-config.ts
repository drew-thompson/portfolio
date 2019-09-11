import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { of } from 'rxjs';

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

/**
 * A custom preloading strategy used to preload individual routes.
 */
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => any) {
    return route.data && route.data.preload ? load() : of(null);
  }
}
