import React from 'react'
import { Route, Switch} from 'react-router-dom'
import IndexPage from '../components/indexPage'
import FeaturesPage from '../components/featuresPage'
import App from '../views/App'
export default () => [

    <Route path="/" exact component={IndexPage} key="indexPage" />,
    <Route path="/featuresPage" exact component={FeaturesPage} key="featuresPage" />



]

