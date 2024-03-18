import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {reducers} from "./store/reducers";
import {ItemsEffects} from "./store/effects/items.effects";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(reducers), provideEffects(ItemsEffects)]
};
