import { Route, Switch } from 'react-router'
import { Menu, NewColor, Colors } from './containers'

import '../stylesheets/APP.scss'

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
        </Switch>
      </div>
    )}/>
  </Switch>


export default App
