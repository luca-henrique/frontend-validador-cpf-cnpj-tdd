import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() =>
  import('src/pages/Home/Home').then(module => ({
    default: module.Home,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  )
}
