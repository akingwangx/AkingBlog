import React from 'react'
import { withStyles } from 'material-ui/styles'
import { View } from 'react-web-dom'
import { connect } from 'react-redux'
import { userinfo } from '../redux/user/user.redux'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Reboot from 'material-ui/Reboot'
import Grid from 'material-ui/Grid'
import AttentionBox from '../components/indexPage/attentionBox'
import ArticleBox from '../components/indexPage/ArticleBox'
import TopicBox from '../components/indexPage/TopicBox'
import UserCard from '../components/indexPage/UserCard'
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
    avatar: 'https://pbs.twimg.com/profile_images/672221256419115008/L9y0yHvE_bigger.jpg',
    intro: ' 哈哈哈哈哈',
    title: 'React 深入系列2：组件分类',
    article: '浅谈推进有赞全站 HTTPS 项目-工程篇',
    tag: '#Francisco Gabriel de Anda',
    time: 'October 14, 2016',

  }
]
const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    minHeight: '212px',
    padding: '0',
    position: 'relative'
  },
  header: {
    width: '100%',
    height: '160px',
    background: '#4FC3F7',
  },
  content: {
    padding: '0 16px 0 16px',

  },
  avatar: {
    width: '180px',
    height: '180px',
    position: 'absolute',
    cursor: 'pointer',
    top: '72px',
    left: '100px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '5px 80px',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  data: {
    alignItems: 'center',
    marginRight: '40px',
    cursor: 'pointer',
    marginLeft: '15px'
  },
  dataHover: {
    fontWeight: '700',
    color: ' #616161',
    '&:hover': {
      color: '#03A9F4',
    }
  },
  btn: {
    width: '75px',
    height: '30px',
    borderRadius: '21px',
    color: '#fff',
  }
})

class UserInfoPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    this.props.userinfo()
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
          <Grid item xs={12} sm={12} >
            <Paper className={classes.paper} elevation={1}>
              <View className={classes.header} ></View>
              <View className={classes.content}>
                <Avatar
                  src='http://ovwvaynot.bkt.clouddn.com/touxiang.jpg'
                  className={classes.avatar}
                />
                <Typography variant='title' className={classes.title}>
                  {this.props.nickname}
                </Typography>
                <View style={{ flexDirection: 'row', marginTop: '20px', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', }}>
                    <View className={classes.data}>
                      <Typography className={classes.dataHover}>
                        文章
              </Typography>
                      <Typography color="primary" style={{ fontWeight: 'bold' }}>
                        0
              </Typography>
                    </View>
                    <View className={classes.data}>
                      <Typography className={classes.dataHover}>
                        正在关注
              </Typography>
                      <Typography color="primary" style={{ fontWeight: 'bold' }}>
                        23
              </Typography>
                    </View>
                  </View>


                  <Button color="primary" variant="raised" className={classes.btn}>
                    发博
            </Button>
                </View>
              </View>
            </Paper>


          </Grid>
          <Grid item xs={12} sm={3}>
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
const mapStateToProps = state => {
  return state.user

}
export default connect(mapStateToProps, { userinfo })(withStyles(styles)(UserInfoPage))