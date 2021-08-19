import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import Post from './Component/Post';
import SignUp from './Component/SignUp';
import User from './Component/User';
import Nav from './Nav'
import { PrivateRoute } from './Component/Private';
import ComeHere from './Component/ComeHere';
import comment from './Component/comment';



function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={SignUp} />
          <PrivateRoute exact path= '/come' component={ComeHere} />
          <PrivateRoute exact path='/user' component={User} />
          <PrivateRoute exact path='/post' component={Post} />
          <PrivateRoute exact path='/comment' component={comment} />
        </Switch>

      </Router>
    </div>

  );
}

export default App;
