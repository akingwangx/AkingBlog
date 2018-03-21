import React from 'react'
import { withStyles } from 'material-ui/styles'
import { View } from 'react-web-dom'
import { connect } from 'react-redux'
import { userinfo, uploadImg } from '../redux/user/user.redux'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Reboot from 'material-ui/Reboot'
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip'
import AttentionBox from '../components/indexPage/attentionBox'
import TopicBox from '../components/indexPage/TopicBox'
import UserCard from '../components/indexPage/UserCard'
import DateRange from 'material-ui-icons/DateRange'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import AvatarEditor from 'react-avatar-editor'
import { UploadField, Uploader } from '@navjobs/upload'
import UserInfo from '../components/userinfoPage/userinfo'
import ArticleInfo from '../components/userinfoPage/articleinfo'
import Header from '../components/userinfoPage/userinfoHeader'
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

class UserInfoPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      image: "",
      position: { x: 0.5, y: 0.5 },
      borderRadius: 0,
      preview: null,
      width: 200,
      height: 200,
    }
  }

  componentDidMount = () => {
    this.props.userinfo()
  }


  handleClose = () => {
    this.setState({ open: false })
  }
  handleSave = data => {
    const img = this.editor.getImageScaledToCanvas().toDataURL()
    const rect = this.editor.getCroppingRect()
    this.props.uploadImg(img, { user: this.props.user })
    this.setState({ open: false })

  }

  setEditorRef = editor => {
    if (editor) this.editor = editor
  }
  handlePositionChange = position => {
    this.setState({ position })
  }

  render() {
    const { classes, avatar, nickname, user, createdate } = this.props
    return (
        <Grid
          container
          spacing={0}
          alignItems='flex-start'
          direction='row'
          justify='space-around'
        >
          <Grid item xs={12} sm={12} >
            <Header {...this.props}/>
          </Grid>
          <Grid item xs={12} sm={3}>
          <UserInfo {...this.props}/>
          </Grid>
          <Grid item xs={12} sm={5}>
          <ArticleInfo {...this.props}/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TopicBox {...this.props} list={list} />
            <AttentionBox {...this.props} list={list} />
          </Grid>

        </Grid>


    )
  }
}
const mapStateToProps = state => {
  return state.user

}
export default connect(mapStateToProps, { userinfo, uploadImg })(UserInfoPage)