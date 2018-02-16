import React from 'react'
import NavBar from '../views/layout/navbar'
import Routes from '../config/router'
export default class App extends React.Component{
  componentDidMount(){

  }
  render(){
    return(
    <div>
      <NavBar/>
      <Routes/>
    </div>
    
    )
  }
}