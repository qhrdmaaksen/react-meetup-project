import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// router 사용하기 위해 BrowserRouter 로 감싸줌, 이제 라우터가 App 을 인식하고 url 을 감지하게 됨
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
