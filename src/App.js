import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import Welcome from './pages/Welcome'
import Details from './pages/Details'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid" style={{marginTop: '15px'}}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/details/:id" component={Details} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
