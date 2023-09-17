import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './constant/routes'
import { Products } from 'pages'
import { $App, $Content, $Header } from './styles'

export const App = () => {
  return (
    <$App>
      <$Header />
      <$Content>
        <Routes>
          <Route path={ROUTES.home} element={<Products />} />
        </Routes>
      </$Content>
    </$App>
  )
}
