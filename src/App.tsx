import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { ReactQueryProvider } from './ReactQueryProvider'
import { GlobalStyles } from './styles/globalStyles'

function App() {
  return (
    <ReactQueryProvider>
      <GlobalStyles />
      <RouterProvider router={routes}></RouterProvider>
    </ReactQueryProvider>
  )
}

export default App
