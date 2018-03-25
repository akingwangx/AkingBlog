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
import { userinfo } from '../redux/user/user.redux'
import {getAllPost} from '../redux/post/post.redux'

const list = [
  {
    name: '王鑫',
    avatar: 'http://ovwvaynot.bkt.clouddn.com/touxiang.jpg',
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

  },
  {
    name: '张1',
    avatar: 'https://pbs.twimg.com/profile_images/672221256419115008/L9y0yHvE_bigger.jpg',
    intro: ' 哈哈哈哈哈',
    title: 'React 深入系列2：组件分类',
    article: '浅谈推进有赞全站 HTTPS 项目-工程篇',
    tag: '#Francisco Gabriel de Anda',
    time: 'October 14, 2016',

  },
  {
    name: '张2',
    avatar: 'https://pbs.twimg.com/profile_images/672221256419115008/L9y0yHvE_bigger.jpg',
    intro: ' 哈哈哈哈哈',
    title: 'React 深入系列2：组件分类',
    article: '浅谈推进有赞全站 HTTPS 项目-工程篇',
    tag: '#Francisco Gabriel de Anda',
    time: 'October 14, 2016',

  },
  {
    name: '张3',
    avatar: 'https://pbs.twimg.com/profile_images/672221256419115008/L9y0yHvE_bigger.jpg',
    intro: ' 哈哈哈哈哈',
    title: 'React 深入系列2：组件分类',
    article: '浅谈推进有赞全站 HTTPS 项目-工程篇',
    tag: '#Francisco Gabriel de Anda',
    time: 'October 14, 2016',

  },
  {
    name: '张4',
    avatar: 'https://pbs.twimg.com/profile_images/672221256419115008/L9y0yHvE_bigger.jpg',
    intro: ' 哈哈哈哈哈',
    title: 'React 深入系列2：组件分类',
    article: '浅谈推进有赞全站 HTTPS 项目-工程篇',
    tag: '#Francisco Gabriel de Anda',
    time: 'October 14, 2016',

  },
  {
    name: '张5',
    avatar: 'https://pbs.twimg.com/profile_images/672221256419115008/L9y0yHvE_bigger.jpg',
    intro: ' 哈哈哈哈哈',
    title: 'React 深入系列2：组件分类',
    article: '浅谈推进有赞全站 HTTPS 项目-工程篇',
    tag: '#Francisco Gabriel de Anda',
    time: 'October 14, 2016',

  }
]
@connect(
  state => state,
  { userinfo, getAllPost }
)
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    this.props.userinfo()
    this.props.getAllPost()
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
            this.props.isAuth ?
              <UserCard
                {...this.props.user}
                {...this.props.post}
              /> : null
          }
          <AttentionBox
            {...this.props.user}
            {...this.props.post}
            list={list} />
        </Grid>
        <Grid item xs={12} sm={5} >
          <ArticleBox
            {...this.props.post}
            list={list} />   
        </Grid>
        <Grid item xs={12} sm={3}>
          <TopicBox
            {...this.props.user}
            {...this.props.post}
            list={list} />
        </Grid>
      </Grid>

    )
  }
}

export default IndexPage