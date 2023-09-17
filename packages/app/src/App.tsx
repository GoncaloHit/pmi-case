import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import { Home } from './pages'

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
    </Routes>
  )
}
