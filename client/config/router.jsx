import React from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { withStyles } from 'material-ui/styles'
import NavBar from '../views/layout/navbar'
import IndexPage from '../components/indexPage/indexPage'
import FeaturesPage from '../components/featuresPage'
const styles ={
    switch: {
        position: 'relative',
        '&>div':{
            position:'absolute'
        }
      },
    
}
class Routes extends React.Component{
    render(){
        const {classes}=this.props
        return (
           <NavBar>
            <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className={classes.switch}
                >
                <Route path="/" exact component={IndexPage} />
                <Route path="/featuresPage" component={FeaturesPage} />
                </AnimatedSwitch>
            </NavBar>
        )
    }
}
export default withStyles(styles)(Routes) 









