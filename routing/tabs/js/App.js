'use strict';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="tabs">
          <nav className="tabs__items">
            <NavLink className="tabs__item" exact={true} activeClassName="tabs__item-active" to="/">Рефераты</NavLink>
            <NavLink className="tabs__item" activeClassName="tabs__item-active" to="/creator">Криэйтор</NavLink>
            <NavLink className="tabs__item" activeClassName="tabs__item-active" to="/fortune">Гадалка</NavLink>
          </nav>
          <div className="tabs__content">
            <Switch>
              <Route path="/creator" component={Creator}/>
              <Route path="/fortune" component={Fortune}/>
              <Route path="/" component={Essay}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
