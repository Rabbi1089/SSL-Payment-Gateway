import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './pages/Main.jsx';
import Sucess from './pages/Sucess.jsx';
import Cancel from './pages/Cancel.jsx';
import Fail from './pages/Fail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/success",
    element:<Sucess />
  },
  {
    path: "/cancel",
    element:<Cancel />
  },
  {
    path: "/fail",
    element:<Fail />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
