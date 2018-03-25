import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { withRouter, Redirect } from 'react-router-dom'
import { View } from 'react-web-dom'
import classNames from 'classnames'
import Reboot from 'material-ui/Reboot'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import SearchBar from 'material-ui-search-bar'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip'
import Menu, { MenuItem } from 'material-ui/Menu';
import WbAuto from 'material-ui-icons/WbAuto'
import SpeakerNotes from 'material-ui-icons/SpeakerNotes'
import Notifications from 'material-ui-icons/Notifications'
import PersonAdd from 'material-ui-icons/PersonAdd'
import { connect } from 'react-redux'
import { userinfo } from '../../redux/user/user.redux'
import browserCookie from 'browser-cookies'
import { LinearProgress } from 'material-ui/Progress'
const styles = {
  root: {
    width: '100%',
  },
  logo: {
    width: 40,
    height: 40,
  },
  nav: {
    marginRight: 85,
    color: '#000',
    borderRadius: 21,
    '&:hover': {
      color: '#03a9f4',
      background: '#fff',
    }
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 55,
    cursor: 'pointer',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    width: 55,
    height: 55,
    border: '1px solid #eee',
    marginLeft: 30,
    cursor: 'pointer',
  },
  login: {
    cursor: 'pointer',
    fontSize: '15px',
    '&:hover': {
      color: '#03a9f4',
    },
    marginRight: '55px'
  },
  loginSpan: {
    fontSize: '15px',
    marginRight: '55px',
  }
}

@connect(
  state => state.user,
  { userinfo }
)
@withRouter

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.skipUserInfo = this.skipUserInfo.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    this.props.userinfo()
    setTimeout(
      () => {
        this.setState({
          loading: true
        })
      }
      , 1500)
  }
  componentWillUnmount() {

  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose() {
    this.setState({ anchorEl: null })
  }
  skipUserInfo() {
    this.setState({ anchorEl: null })
    this.props.history.push('/userinfo')
  }
  logout() {
    this.setState({ anchorEl: null })
    browserCookie.erase('userid')
    browserCookie.erase('postid')
    window.location.href = window.location.href
  }

  render() {
    const { classes, avatar, nickname, redirectTO } = this.props
    const { anchorEl, completed } = this.state
    return (
      <div className={classes.root}>

        <AppBar position="fixed" color="inherit">
          <Toolbar style={{ minHeight: 80, }}>
            <Typography variant="title" color="inherit">
              <Link to='/'>
                <WbAuto
                  className={classes.logo}
                  color="primary"
                />
              </Link>

            </Typography>
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              style={{
                marginLeft: 40,
                maxWidth: 220,
                borderRadius: 21,
                marginRight: 165,
              }} />

            {/* 导航栏 */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button className={classes.nav} color='primary'>首页</Button>
            </Link>
            <Link to="/featuresPage" style={{ textDecoration: 'none' }}>
              <Button className={classes.nav} color='primary'>热门</Button>
            </Link>
            <Link to="/node" style={{ textDecoration: 'none' }}>
              <Button className={classes.nav} color='primary' style={{ marginRight: 110 }}>私信</Button>
            </Link>
            {/* <Link to="/timeLine" style={{textDecoration:'none'}}>
            <Button className={classes.nav} color='primary' style={{marginRight:110}}>timeLine</Button>        
            </Link> */}

            {/* 功能按钮 */}


            <div>
              <Tooltip title="评论" placement="bottom">
                <SpeakerNotes className={classes.icon} style={{ color: '#63BD70' }} />
              </Tooltip>
              <Tooltip title="通知" placement="bottom">
                <Notifications className={classes.icon} style={{ color: '#FBAB4A' }} />
              </Tooltip>
              <Tooltip title="添加好友" placement="bottom">
                <PersonAdd className={classes.icon} style={{ color: '#CD7FE2', marginRight: '80px' }} />
              </Tooltip>
            </div>



            {this.props.isAuth ?
              <Tooltip title="个人资料与账号" placement="bottom-end">
                <View className={classes.row}>
                  <Avatar
                    alt={this.props.nickname}
                    src={avatar ? avatar : null}
                    className={classes.avatar}
                    onClick={this.handleClick}
                  >
                    {avatar ? null : nickname[0]}
                  </Avatar>
                </View>
              </Tooltip> :
              <View style={{ flexDirection: "row" }}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Typography className={classes.login}>登录</Typography>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <Typography className={classes.login}>注册</Typography>
                </Link>

              </View>
            }
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.skipUserInfo}>
                <Typography className={classes.loginSpan}>个人资料</Typography>
              </MenuItem>
              <MenuItem >
                <Typography
                  className={classes.loginSpan}
                  onClick={() => {
                    this.setState({ anchorEl: null })
                    this.props.history.push('/editArticle')
                  }}
                >发布文章</Typography>
              </MenuItem>
              <MenuItem onClick={this.logout}>
                <Typography className={classes.loginSpan}>注销</Typography>
              </MenuItem>

            </Menu>

          </Toolbar>
        </AppBar>

        <View
          style={this.props.location.pathname != ('/editArticle') ?
            {
              minHeight: '900px',
              width: '100%',
              marginTop: '80px',
            } :
            {
              background: '#fff',
              width: '100%',
              marginTop: '80px',

            }
          }
        >


          <Reboot />
          {this.state.loading ?
            this.props.children
            :
            <LinearProgress color='primary' style={{ background: '#eee' }} />
          }


        </View>
      </div>

    )
  }
}

export default withStyles(styles)(NavBar) 