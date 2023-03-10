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
import List from './components/modules/list';
import {UserProvider} from './context/user-context';
import { DataProvider } from './context/data-context';
import Public from './components/modules/public';
import Combine from './components/modules/combine';


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
      },
      {
        path: "/private/:id",
        element: <List />
      },
      {
        path: "/public",
        element: <Public />
      },
      {
        path: "/public/:id",
        element: <List />
      },
      {
        path:'/combine',
        element: <Combine />
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
