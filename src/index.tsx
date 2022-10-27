import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { MatoaProvider } from '@matoa-ui/components';
// import { ToastContainer } from "react-toastify";
import App from './App';
import storeInstance from './store/configureStore';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const { store } = storeInstance;
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <MatoaProvider>
        <App />
        {/* <ToastContainer
          position="top-right"
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="colored"
          pauseOnFocusLoss
          draggable
        /> */}
      </MatoaProvider>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
