import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/login.tsx"
import SignUp from "./routes/signUp.tsx"
import Planet from './routes/routesdashboard/planet.tsx';
import Dashboard from './routes/dashboard.tsx';
import ProtectedRoute from './routes/protectedRoute.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/SignUp",
    element: <SignUp />
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/DashBoard",
        element: <Dashboard />,
        
      }
    ]
  },
  {
    path: "/Planet",
    element: <Planet />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
