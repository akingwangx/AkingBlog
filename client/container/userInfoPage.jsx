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
import ArticleBox from '../components/indexPage/ArticleBox'
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
    padding: '0px',
    position: 'relative',

  },
  header: {
    width: '100%',
    height: '160px',
    background: '#4FC3F7',
  },
  content: {
    padding: '0 146px 0 16px',
    flexDirection: 'row'
  },
  avatar: {
  },
  data: {
    alignItems: 'center',
    marginRight: '40px',
    cursor: 'pointer',
    marginLeft: '15px',
    height: '100%',
    borderBottom: '2px solid #fff',
    '&:hover': {
      color: '#03A9F4',
      borderBottom: '2px solid #03A9F4'
    },
    fontWeight: '700',
    color: ' #616161',
  },
  btn: {
    width: '105px',
    height: '30px',
    borderRadius: '21px',
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
    marginBottom: '15px'

  },
  span: {
    fontSize: '13px',
    cursor: 'pointer',
    color: '#898d8d',
    '&:hover': {
      textDecoration: 'underline',
    },
    marginBottom: '8px',
  },
  upload: {
    width: '180px',
    height: '180px',
    position: 'absolute',
    cursor: 'pointer',
    top: '72px',
    left: '100px',
    background: '#4FC3F7',
    border: '6px solid #fff',
    borderRadius: '90px',
    '&:hover': {
      border: '6px solid #FFAB40'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

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
              <View className={classes.header} >  <Tooltip title={avatar ? nickname : "添加头像"} placement="right">
                <UploadField
                  onFiles={files => { this.setState({ open: true, image: files[0] }) }}
                  containerProps={{
                    className: classes.upload
                  }}
                >
                  <img
                    src={avatar ? avatar : 'http://ovwvaynot.bkt.clouddn.com/owner_empty_avatar.png'}
                  />
                </UploadField>
              </Tooltip>
              </View>
              <View className={classes.content}>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <DialogTitle style={{ borderBottom: '1px solid #e6ecf0' }}>{"调整你的照片位置和尺寸"}</DialogTitle>
                  <DialogContent style={{ padding: '15px' }}>
                    <View style={{ width: '500px', height: '350px', flexDirection: 'row' }}>
                      <AvatarEditor
                        ref={this.setEditorRef}
                        width={168}
                        height={168}
                        onPositionChange={this.handlePositionChange}
                        border={80}
                        borderRadius={100}
                        color={[255, 255, 255, 0.3]} // RGBA
                        image={this.state.image}
                        scale={1}
                        crossOrigin="anonymous"
                      />
                    </View>
                  </DialogContent>
                  <DialogActions>
                    <Button className={classes.btn} variant='raised' onClick={this.handleClose} color='primary'>
                      取消
                    </Button>
                    <Button
                      className={classes.btn}
                      variant='raised'
                      autoFocus
                      color='primary'
                      onClick={this.handleSave}
                    >
                      应用
                  </Button>
                  </DialogActions>
                </Dialog>
                <View style={{ flexDirection: 'row', marginTop: '20px' }}>
                  <View style={{ flexDirection: 'row', margin: '0 640px 0 400px' }}>
                    <View className={classes.data}>
                      <span >
                        文章
                      </span>
                      <span >
                        0
                      </span>
                    </View>
                    <View className={classes.data}>
                      <span >
                        正在关注
                      </span>
                      <span >
                        23
                     </span>
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
            <View style={{ margin: '25px 0 0 95px', }}>
              <span className={classes.title}>
                {nickname}
              </span>
              <span className={classes.span}>
                {`@${user}`}
              </span>
              <span className={classes.span}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <DateRange></DateRange>
                  {`加入于${createdate.slice(0, 10)}`}
                </View>
              </span>
            </View>

          </Grid>
          <Grid item xs={12} sm={5}>
            <View style={{ marginTop: '20px', fontFamily: 'adelle-sans' }}>
              <span className={classes.title}>
                文章列表
              </span>
              <p>
                你还没发表过文章哦
              </p>
              <View>
                {/* <Typography variant='title'>
                  Parcel Vs Webpack
                </Typography>
               
                <span> Posted by xxx on 2017-12-27</span> */}
              </View>
            </View>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TopicBox list={list} />
            <AttentionBox list={list} />
          </Grid>

        </Grid>
      </div >

    )
  }
}
const mapStateToProps = state => {
  return state.user

}
export default connect(mapStateToProps, { userinfo, uploadImg })(withStyles(styles)(UserInfoPage))