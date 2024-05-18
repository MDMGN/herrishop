import { UserProvider } from './contexts/UserContext/UserProvider.tsx'
import { router } from './router/router.ts'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <UserProvider>
        <RouterProvider  router={router} />
    </UserProvider>
  )
}

export default App
