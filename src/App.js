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
import EditProjectForm from './Components/EditProjectForm';


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
      <PrivateRoute path='/addproject' component={AddProjectForm}/>
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/project/:id' component={ProjectDetail} />
      <PrivateRoute path='/projectEdit/:id' component={EditProjectForm} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
