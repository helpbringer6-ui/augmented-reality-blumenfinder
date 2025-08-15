import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PlantDetails from './pages/PlantDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/plant/:id' component={PlantDetails} />
      </Switch>
    </Router>
  );
};

export default App;
