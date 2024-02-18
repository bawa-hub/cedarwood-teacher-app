import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BatchWise from './pages/BatchWise.jsx'
import ClassWise from './pages/ClassWise.jsx'
import ChildWise from './pages/ChildWise.jsx'
import Home from './pages/Home.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/batches',
    element: <BatchWise />
  },
  {
    path: '/classes',
    element: <ClassWise />
  },
  {
    path: '/child',
    element: <ChildWise />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
