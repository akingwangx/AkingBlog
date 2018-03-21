import React from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { withStyles } from 'material-ui/styles'
import NavBar from '../views/layout/navbar'
import IndexPage from '../container/indexPage'
import FeaturesPage from '../container/featuresPage'
import UserInfoPage from '../container/userInfoPage'
import EditArticlePage from '../container/editArticlePage.js'
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
                <Route path="/userInfo" component={UserInfoPage} />     
                <Route path="/editArticle" component={EditArticlePage}/>                      
                </AnimatedSwitch>
            </NavBar>
        )
    }
}
export default withStyles(styles)(Routes) 









