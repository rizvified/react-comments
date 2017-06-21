import React from 'react';
import { render } from 'react-dom';

import Page from './components/page.jsx';

const renderApp = () => {
  render(
    <Page />,
    document.getElementById('app'),
  );
};

renderApp();
