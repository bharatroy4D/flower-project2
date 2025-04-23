import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Route/Home/Home.jsx';
import About from './Components/Route/About/About.jsx';
import Products from './Components/Route/Products/Products.jsx';
import Blogs from './Components/Route/Blogs/Blogs.jsx';
import Root from './Layout/Root.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
