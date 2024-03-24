import React from 'react';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={"An error has occurred"}>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
