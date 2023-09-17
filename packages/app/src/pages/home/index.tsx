import { Button } from 'ui'
import { $Title } from './styles'
import { usePingMutation } from 'store/api'

export const Home = () => {
  const [ping] = usePingMutation()

  const handlePing = () => ping()

  return (
    <>
      <$Title>App One</$Title>
      <Button onClick={handlePing}>Ping API One</Button>
    </>
  )
}
