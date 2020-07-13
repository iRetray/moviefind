import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
