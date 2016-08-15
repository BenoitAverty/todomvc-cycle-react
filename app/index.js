/* eslint-env browser */

import React from 'react';
import { makeCycleReactDriver } from 'cycle-react-driver';
import { run } from '@cycle/rxjs-run';

import { AppComponent, AppMain } from './components/app';

const drivers = {
  react: makeCycleReactDriver(<AppComponent />, '#app'),
};

run(AppMain, drivers);
