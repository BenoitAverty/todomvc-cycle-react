/* eslint-env browser */

import React from 'react';
import Rx from 'rxjs';
import { makeCycleReactDriver } from 'cycle-react-driver';
import { run } from '@cycle/rxjs-run';

import { AppComponent, AppMain } from './components/app';
import { FooterMain } from './components/footer';

const main = sources => {
  const AppSinks = AppMain(sources);
  const FooterSinks = FooterMain(sources);

  return {
    react: Rx.Observable.merge(AppSinks.react, FooterSinks.react),
  };
}

const drivers = {
  react: makeCycleReactDriver(<AppComponent />, '#app'),
};

run(main, drivers);
