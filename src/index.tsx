import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About';
import App from './App';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.body.classList.add('bg-[#040410]');

root.render(
  <React.StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
    </style>
    <RouterProvider router={router} />
  </React.StrictMode>
);
