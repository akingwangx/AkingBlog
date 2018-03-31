import React from 'react'
import { withStyles } from 'material-ui/styles'
import { View } from 'react-web-dom'
import { connect } from 'react-redux'
import { userinfo, uploadImg,getOutherUserInfo} from '../redux/user/user.redux'
import {getUserPostList,getPost,getAllPost} from '../redux/post/post.redux'
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

@connect(
  state=>state,
  {userinfo, uploadImg,getUserPostList,getPost,getAllPost,getOutherUserInfo}
)
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
    this.props.getUserPostList(this.props.user._id)
    this.props.getAllPost()
    this.props.getOutherUserInfo(this.props.user.user)
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
          style={{background: '#e6ecf0'}}
        >
          <Grid item xs={12} sm={12} >
            <Header {...this.props}/>
          </Grid>
          <Grid item xs={12} sm={3} style={{marginTop:'15px'}}>
          <UserInfo {...this.props}/>
          </Grid>
          <Grid item xs={12} sm={5} style={{marginTop:'15px'}}>
          <ArticleInfo {...this.props}/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TopicBox {...this.props} />
            <AttentionBox {...this.props} />
          </Grid>

        </Grid>


    )
  }
}

export default UserInfoPage