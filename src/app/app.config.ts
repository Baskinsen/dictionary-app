import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import {provideCacheableAnimationLoader,provideLottieOptions} from 'ngx-lottie';
import player from 'lottie-web';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideLottieOptions({player: () => player}),
    provideCacheableAnimationLoader(),
    provideRouter(routes), provideHttpClient(withFetch())]
};