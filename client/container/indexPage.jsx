import React from 'react'
import Reboot from 'material-ui/Reboot'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import AttentionBox from '../components/indexPage/attentionBox'
import ArticleBox from '../components/indexPage/ArticleBox'
import TopicBox from '../components/indexPage/TopicBox'
import UserCard from '../components/indexPage/UserCard'
import { connect } from 'react-redux'
import { userinfo, getOutherUserInfo } from '../redux/user/user.redux'
import { getAllPost, getUserPostList } from '../redux/post/post.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state => state,
  { userinfo, getOutherUserInfo, getAllPost, getUserPostList }
)
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    this.props.userinfo()
    this.props.getAllPost()
    this.props.getOutherUserInfo(this.props.user.user)
  }
  render() {
    return (
      <Grid
        container
        spacing={0}
        alignItems='flex-start'
        direction='row'
        justify='space-around'
        style={{ background: '#e6ecf0', minHeight: 900 }}
      >


        <Grid item xs={12} sm={3} >
          {
            this.props.user.isAuth ?
              <UserCard
                {...this.props}
              /> : null
          }
          <AttentionBox
            {...this.props}
            />
        </Grid>
        <Grid item xs={12} sm={5} >
          <ArticleBox
            {...this.props.post}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TopicBox
            {...this.props}

           />
        </Grid>
      </Grid>

    )
  }
}

export default IndexPage