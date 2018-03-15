import React from 'react'
import Reboot from 'material-ui/Reboot'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import AttentionBox from './attentionBox.js'
import ArticleBox from './articleBox.js'
import TopicBox from './topicBox.js'
import UserCard from './userCard.js'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: '15px'
  },
})
const list = [
  {
    name: '王鑫',
    avatar: 'https://pbs.twimg.com/profile_images/963377968029384704/F5Iwm31y_bigger.jpg',
    intro: ' Paper can be used to builds',
    title: 'Grayson Allen',
    article: 'I was taking a walk around my neighborhood, smoking a cigarette and crossed the street. When I was in the middle of the crosswalk, I heard brakes lock up and a small car slammed into me. I was pretty strong, a commercial fisherman, and not really hurt. A young woman stuck her head out the window. She h',
    tag: '#Grayson Allen',
    time: 'September 24, 2014',

  },
  {
    name: '薛亚楠',
    avatar: 'https://pbs.twimg.com/profile_images/960983398964633600/p3KxcEnU_bigger.jpg',
    intro: ' 123',
    title: 'React 深入系列2：组件分类',
    article: '浅谈推进有赞全站 HTTPS 项目-工程篇浅谈推进有赞全站 HTTPS 项目-工程篇浅谈推进有赞全站 HTTPS 项目-工程篇浅谈推进有赞全站 HTTPS 项目-工程篇浅谈推进有赞全站 HTTPS 项目-工程篇',
    tag: 'Dyke',
    time: 'March 10, 2018',

  },
  {
    name: '张三',
    avatar: 'https://avatars3.githubusercontent.com/u/3355748?v=4',
    intro: ' 哈哈哈哈哈',
    title: 'React 深入系列2：组件分类',
    article: '浅谈推进有赞全站 HTTPS 项目-工程篇',
    tag: '#Francisco Gabriel de Anda',
    time: 'October 14, 2016',

  }
]
class IndexPage extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    const { classes } = this.props

    return (
      
        <div className={classes.root}>
          <Grid
            container
            spacing={0}
            alignItems='flex-start'
            direction='row'
            justify='space-around'
          >
            <Grid item xs={12} sm={3} >
              <UserCard />
              <AttentionBox list={list} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <ArticleBox list={list} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TopicBox list={list} />
            </Grid>

          </Grid>
        </div>
    )
  }
}
export default withStyles(styles)(IndexPage);