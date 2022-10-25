import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

// router 사용하기 위해 BrowserRouter 로 감싸줌, 이제 라우터가 App 을 인식하고 url 을 감지하게 됨
// FavoritesContextProvider 로 감싸줌으로써 모든 컴포넌트에서 FavoritesContext 를 사용할 수 있게 됨
ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root'),
);
