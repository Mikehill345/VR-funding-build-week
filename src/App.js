import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router';
import PrivateRoute from './utils/PrivateRoute'
import SignIn from './Components/SignIn'
import SignUp from './Components/Signup'
import AddItemForm from './Components/AddItemForm'
import Dashboard from './Components/Dashboard'
import ItemDetail from './Components/ItemDetail'


function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    <div className="App">
      <Switch>
    <Route exact path='/' component={SignIn} />
      <Route path='/signup' component={SignUp}/>
      <Route path='/item/additem' component={AddItemForm}/>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/item/:id' component={ItemDetail} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
