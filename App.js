import * as React from 'react';
import DashboardPage from './routes';

const HeroApp = () => {
  return <>Hello. {DashboardPage ? <DashboardPage /> : null}</>;
};

export default HeroApp;

if (module.hot) {
  module.hot.accept();
}
