import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Article from './components/article.jsx';

import style from './styles/main.scss';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp(Article);

if (module.hot) {
  module.hot.accept('./components/article.jsx', () => { render(Article); });
}
