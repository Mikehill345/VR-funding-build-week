import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router';
import PrivateRoute from './utils/PrivateRoute'
import SignIn from './Components/SignIn'
import SignUp from './Components/Signup'
import AddProjectForm from './Components/AddProjectForm'
import Dashboard from './Components/Dashboard'
import ProjectDetail from './Components/ProjectDetail'


function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='dashboard'>Dashboard</Link>
      </div>
    <div className="App">
      <Switch>
    <Route exact path='/' component={SignIn} />
      <Route path='/signup' component={SignUp}/>
      <Route path='/addproject' component={AddProjectForm}/>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/project/:id' component={ProjectDetail} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
