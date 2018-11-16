//import { render } from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import Menu from './ui/Menu'
import Page404 from './ui/Page404'
import { Colors, Color, NewColor } from './containers.js'
import '../../stylesheets/App.scss' //APP


const App = () =>
  <Switch>
    <Route exact  path="/:id" component={Color} />
    <Route path="/" component={() => (
      <div className="app">
        <Route component={Menu} />
        <NewColor />
        <Switch>
          <Route exact path="/" component={Colors} />
          <Route path="/sort/:sort" component={Colors} />
          <Route component={Page404} />
        </Switch>
      </div>
    )} />
  </Switch>

/* see index.js
render(
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>,
      document.getElementById('root')
)
*/
