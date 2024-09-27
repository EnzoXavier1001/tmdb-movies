import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/DefaultLayout'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
