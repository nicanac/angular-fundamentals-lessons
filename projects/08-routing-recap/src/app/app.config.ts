import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // withComponentInputBinding() is a function that is used to provide the component input binding and to avoid the error: "Can't bind to 'routerLink' since it isn't a known property of 'a'"
  providers: [provideRouter(routes,withComponentInputBinding())]
};
