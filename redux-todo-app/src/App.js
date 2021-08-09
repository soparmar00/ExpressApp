import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';

import Nav from './Nav'
import Login from './Todo/Login';
import Users from './Todo/Users';
import { PrivateRoute } from './Private';



function App() {
  return (
    
      <div className="App">
        <Router>
          <Nav />
          <Switch>
           <PrivateRoute exact path="/" component={Users} />
            <Route exact path='/login' component={Login} />
          </Switch>

        </Router>
      </div>
   
  );
}

export default App;
