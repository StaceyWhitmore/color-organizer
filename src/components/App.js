import { Route, Switch } from 'react-router-dom'
import { Menu } from './ui/Menu'
import { Page404 } from './ui/Page404'
import { /*Menu,*/ NewColor, Colors, Color} from './containers'
import '../stylesheets/APP.scss'

/*Notice <Menu> contains NO path; therefore, it is Always rendered
Outer Switch cases:
if: exact path="/:id"
A) just one <Color> rendered (show <ColorDetails)
ELSE if
  path="/"
B) <NewColor> is rendered (Always)
and the following Switch cases are evaluated:

  --inner (nested) switch cases--
  switch case a): path="/" = (sort param = undefined); therefore, <ColorS> sorted by Default (DATE)
  switch case b): if if path="/sort/:sort" then  <ColorS> rendered and sorted by a parameter (e.g.rating or title)
  switch case c): If neither then 404 Page is rendered.
*/
const App = () =>
  <Switch>
    <Route exact path="/:id"/ component={Color}/>
    <Route path="/" component={() => (
      <div className="app">
        <Route component={Menu} />
        <NewColor />
        <Switch>
          <Route exact path="/" component={Colors} />
          <Route path="/sort:sort" component={Colors} />
          <Route component={Page404} />
        </Switch>
      </div>
    )}/>
  </Switch>

export default App
