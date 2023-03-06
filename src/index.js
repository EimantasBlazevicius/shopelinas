import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/modules/home';
import Root from './components/shared/root';
import Private from './components/modules/private';
import {UserProvider} from './context/user-context';
import { DataProvider } from './context/data-context';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
          path: "/",
          element: <Home />,
      },
      {
        path: "/private",
        element: <Private />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <DataProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </DataProvider>
  </UserProvider>
);
