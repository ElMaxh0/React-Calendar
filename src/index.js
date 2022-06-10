import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SelectedDayProvider from './hooks/SelectedDay';
import SelectedMouthProvider from './hooks/SelectedMouth';
import CompromissosProvider from './hooks/Compromissos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectedDayProvider>
      <SelectedMouthProvider>
        <CompromissosProvider>
          <App />
        </CompromissosProvider>
      </SelectedMouthProvider>
    </SelectedDayProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
