import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomeNav from '../components/homeNav'
export default ()=>[

  <Route path="/" component={HomeNav} exact key="homeNav"/>


]

