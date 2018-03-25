import React from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { withStyles } from 'material-ui/styles'
import NavBar from '../views/layout/navbar'
import IndexPage from '../container/indexPage'
import FeaturesPage from '../container/featuresPage'
import UserInfoPage from '../container/userInfoPage'
import EditArticlePage from '../container/editArticlePage'
import PostPage from '../components/postPage/index'
const styles = {


}
class Routes extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <NavBar>
                <Route path="/" exact component={IndexPage} />
                <Route path="/featuresPage" component={FeaturesPage} />
                <Route path="/userInfo" component={UserInfoPage} />
                <Route path="/editArticle" component={EditArticlePage} />
                <Route path="/postPage" component={PostPage} />

            </NavBar>
        )
    }
}
export default withStyles(styles)(Routes)









