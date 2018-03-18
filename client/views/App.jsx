import React from 'react'
import NavBar from '../views/layout/navbar'
import { withStyles } from 'material-ui/styles'
import Routes from '../config/router'
import Login from '../components/login/index.js'
import Register from '../components/register/index.js'
import {
  Route,
  Switch,
} from "react-router-dom";

export default class App extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/" component={Routes} />     */}
          <Routes/>
      </Switch>
    )
  }
}

