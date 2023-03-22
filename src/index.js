import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MetricsDebugOverlay, MetricsProvider } from '@cabify/prom-react';
import { customPromMetrics } from './constants';

const container = document.getElementById('root');
const normalizePath = (path) => {
    return path;
};

const root = ReactDOMClient.createRoot(container);
root.render(
    <MetricsProvider
        appName="StoreApp"
        owner="my-team"
        getNormalizedPath={normalizePath}

        metricsAggregatorUrl={'http://localhost:8080/metrics'}
        customMetrics={customPromMetrics}
    >
        <App />
        <MetricsDebugOverlay withLogger />
    </MetricsProvider>);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
