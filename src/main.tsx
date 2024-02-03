import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/login.tsx"
import SignUp from "./routes/signUp.tsx"
import Planet from './routes/routesdashboard/planet.tsx';
import Person from './routes/routesdashboard/person.tsx';
import Film from './routes/routesdashboard/film.tsx';
import Species from './routes/routesdashboard/species.tsx';
import Starship from './routes/routesdashboard/starship.tsx';
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
  },
  {
    path: "/Person",
    element: <Person />,
  },
  {
    path: "/Starship",
    element: <Starship />,
  },
  {
    path: "/Film",
    element: <Film />,
  },
  {
    path: "/Species",
    element: <Species />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
