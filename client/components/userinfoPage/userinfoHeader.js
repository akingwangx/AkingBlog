import React from 'react'
import { withStyles } from 'material-ui/styles'
import { View } from 'react-web-dom'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Tooltip from 'material-ui/Tooltip'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import AvatarEditor from 'react-avatar-editor'
import { UploadField, Uploader } from '@navjobs/upload'

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

class Header extends React.Component {
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
      <Paper className={classes.paper} elevation={1}>
        <View className={classes.header} > 
           <Tooltip title={avatar ? nickname : "添加头像"} placement="right">
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
            <Button 
            color="primary" 
            variant="raised" 
            className={classes.btn}
            onClick={()=>{
              this.props.history.push('/editArticle')
            }}
            >
              发博
           </Button>
          </View>
        </View>
      </Paper>


    )
  }
}

export default withStyles(styles)(Header) 