import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'


//....

import { Route, Switch } from 'react-router-dom'
import Menu from './ui/Menu'
import { Colors, Color, NewColor } from './containers'
import '../stylesheets/App.scss'

const App = () =>
  <Switch>
    <Route exact  path="/:id" component={Color} />
    <Route path="/" component={() => (
      <div className="app">
        <Menu />
        <NewColor />
        <Colors />
      </div>
    )}/>
  </Switch>


render(
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>,
      document.getElementById('root')
)
