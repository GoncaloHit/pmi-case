import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import { Home } from './pages'
import { $App, $Content } from './styles'

export const App = () => {
  return (
    <>
      <$App>
        <$Content>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
          </Routes>
        </$Content>
      </$App>
    </>
  )
}
