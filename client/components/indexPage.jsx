import React from 'react'
import Reboot from 'material-ui/Reboot'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import AttentionBox from './attentionBox.js'
import ArticleBox from './articleBox.js'
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
    article:'问了23000名开发者，得出这份Javascript年终盘点'

  },
  {
    name: '薛亚楠',
    avatar: 'https://pbs.twimg.com/profile_images/960983398964633600/p3KxcEnU_bigger.jpg',
    intro: ' 123',
    article:'浅谈推进有赞全站 HTTPS 项目-工程篇'
  },
  {
    name: '张三',
    avatar: 'https://pbs.twimg.com/profile_images/426464161103491072/H19Ucr5l_bigger.jpeg',
    intro: ' 哈哈哈哈哈',
    article:'React 深入系列2：组件分类'
  }
]
class IndexPage extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    const { classes } = this.props

    return (
      <div style={{
        background: '#e6ecf0',
        minHeight: '1000px',
        marginTop: '80px',
      }}>
        <Reboot />
        <div className={classes.root}>
          <Grid
            container
            spacing={24}
            alignItems='flex-start'
            direction='row'
            justify='space-around'
          >
            <Grid item xs={12} sm={3} >
              <AttentionBox list={list} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <ArticleBox list={list}/>
            </Grid>

          </Grid>
        </div>

      </div>
    )
  }
}
export default withStyles(styles)(IndexPage);