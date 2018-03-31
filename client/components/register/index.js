import React from 'react'
import { withStyles } from 'material-ui/styles'
import { View } from 'react-web-dom'
import { Link ,Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Reboot from 'material-ui/Reboot'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import WbAuto from 'material-ui-icons/WbAuto'
import Person from 'material-ui-icons/Person'
import Lock from 'material-ui-icons/Lock'
import LockOutline from 'material-ui-icons/LockOutline'
import PersonOutline from 'material-ui-icons/PersonOutline'
import { connect } from 'react-redux'
import { register } from '../../redux/user/user.redux'
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'

const styles = {
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  background: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  register: {
    position: "absolute",
    width: 450,
    padding: "30px 30px 36px",

  },
  logo: {
    width: 40,
    height: 40,
  },
  btn: {
    width: '75px',
    height: '30px',
    borderRadius: '21px',
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 20

  },
  input: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  snackbar: {
    background: '#ff5652'
  }
}
@connect(
  state=>state.user,
  {register}
)
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      nickname: '',
      password: '',
      apassword: '',
      openSnack: false,
    }
    this.nameChange = this.nameChange.bind(this)
    this.nicknameChange = this.nicknameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.apasswordChange = this.apasswordChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  nameChange(event) {
    this.setState({
      user: event.target.value
    })
  }
  nicknameChange(event) {
    this.setState({
      nickname: event.target.value
    })
  }
  passwordChange(event) {
    this.setState({
      password: event.target.value
    })
  }
  apasswordChange(event) {
    this.setState({
      apassword: event.target.value
    })
  }
  handleRegister() {
    this.props.register(this.state)
    setTimeout(() => {
      this.props.msg ?
        this.setState({
          openSnack: true
        }) : null
    }, 50)
    //怎么搞这种事件
  }
  handleClose(event, reason) {
    this.setState({
      openSnack: false
    })
  }
  render() {
    const { classes, msg,redirectTO } = this.props
    const { user, nickname, password, apassword } = this.state

    return (
      <View className={classes.container}>
        {redirectTO? <Redirect to={redirectTO}/>:null}
        <Reboot></Reboot>
        <svg className={classes.background} jsname="BUfzDd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 810" preserveAspectRatio="xMinYMin slice" aria-hidden="true">
          <path fill="#efefee" d="M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z"></path>
          <path fill="#f6f6f6" d="M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z"></path>
          <path fill="#f7f7f7" d="M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z"></path>
          <path fill="#fbfbfc" d="M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z"></path>
          <path fill="#ebebec" d="M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z"></path>
          <path fill="#e1e1e1" d="M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z"></path>
          <path fill="#e7e7e7" d="M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z"></path>
        </svg>
        <Paper className={classes.register} >
          <WbAuto className={classes.logo} color="primary" />
          <View>
            <form style={{ marginTop: 25 }} ref="loginForm" autoComplete="off">
              <Typography variant="title">
                用户注册
              </Typography>
              <View className={classes.input}>
                <Person style={{ marginRight: 10 }} color='secondary' />
                <TextField
                  id="name"
                  fullWidth={true}
                  label="请输入用户名"
                  value={user}
                  onChange={this.nameChange}

                />

              </View>
              <View className={classes.input}>
                <PersonOutline style={{ marginRight: 10 }} color='secondary' />
                <TextField
                  id="nickname"
                  fullWidth={true}
                  label="请输入昵称"
                  value={nickname}
                  onChange={this.nicknameChange}
                />
              </View>
              <View className={classes.input}>
                <Lock style={{ marginRight: 10 }} color='secondary' />
                <TextField
                  id="password"
                  label="请输入密码"
                  type="password"
                  autoComplete="current-password"
                  fullWidth={true}
                  value={password}
                  onChange={this.passwordChange}
                />
              </View>
              <View className={classes.input}>
                <LockOutline style={{ marginRight: 10 }} color='secondary' />
                <TextField
                  id="apassword"
                  label="请再次输入密码"
                  type="password"
                  autoComplete="current-password"
                  fullWidth={true}
                  value={apassword}
                  onChange={this.apasswordChange}
                />
              </View>
              <View style={{ flexDirection: 'row', marginTop: 55, alignItems: 'center' }}>
                <Button
                  color="secondary"
                  variant="raised"
                  className={classes.btn}
                  onClick={this.handleRegister}
                >
                  注册
               </Button>
                <Typography >
                  已有账号?
                <Link to='/login' style={{ textDecoration: 'none', color: "#29B6F6", marginLeft: 5 }}>
                    登录
                </Link>


                </Typography>
              </View>
            </form>
          </View>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.openSnack}
          autoHideDuration={1800}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
            className: classes.snackbar
          }}
          message={<span id="message-id">{msg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </View>
    )
  }
}
const mapStateToProps = state => {

  return state.user
}
export default connect(mapStateToProps, { register })(withStyles(styles)(Register)) 