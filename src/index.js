import React from 'react';
import { render } from 'react-dom';

import Article from './components/article.jsx';
import style from './styles/main.scss';

const renderApp = () => {
  render(
    <Article />,
    document.getElementById('app'),
  );
};

renderApp();
