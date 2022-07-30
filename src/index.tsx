import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
