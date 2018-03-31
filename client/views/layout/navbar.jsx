import React from 'react'
import { Link,withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { View } from 'react-web-dom'
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
import { userinfo, logoutSubmit } from '../../redux/user/user.redux'
import browserCookie from 'browser-cookies'
import { LinearProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
const styles = {
  root: {
    width: '100%',
  },
  logo: {
    width: 40,
    height: 40,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  nav: {
    marginRight: 75,
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
    width: 55,
    height: 55,
    border: '1px solid #eee',
    marginLeft: 10,
    cursor: 'pointer',
  },
  login: {
    cursor: 'pointer',
    fontSize: '15px',
    '&:hover': {
      color: '#03a9f4',
    },
  },
  loginSpan: {
    fontSize: '15px',
  }
}

@connect(
  state => state.user,
  { userinfo, logoutSubmit }
)
@withRouter

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      loading: true
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
          loading: false
        })
      }
      , 500)
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
    this.props.logoutSubmit()
      // window.location.href = window.location.href
  }

  render() {
    const { classes, avatar, nickname, redirectTO, location } = this.props
    const { anchorEl, completed } = this.state
    const path = location.pathname

    return (
      <div className={classes.root}>
      {redirectTO && redirectTO!=='/' ? <Redirect to={redirectTO} /> : null}
        <AppBar position="fixed" color="inherit">
          <Toolbar style={{ height: 80, }}>

            <Grid container spacing={24}>

              <Grid item xs={4} className={classes.grid}>
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
                  }} />
              </Grid>
              <Grid item xs={5} className={classes.grid}>
                {/* 导航栏 */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button className={classes.nav} color='primary'>首页</Button>
                </Link>
                <Link to="/featuresPage" style={{ textDecoration: 'none' }}>
                  <Button className={classes.nav} color='primary'>热门</Button>
                </Link>
                <Link to="/node" style={{ textDecoration: 'none' }}>
                  <Button className={classes.nav} color='primary'>私信</Button>
                </Link>
              </Grid>
              <Grid item xs={3} className={classes.grid}>
                {/* 功能按钮 */}
                <Tooltip title="评论" placement="bottom" className={classes.grid} >
                  <SpeakerNotes className={classes.icon} style={{ color: '#63BD70' }} />
                </Tooltip>
                <Tooltip title="通知" placement="bottom" className={classes.grid}>
                  <Notifications className={classes.icon} style={{ color: '#FBAB4A' }} />
                </Tooltip>
                <Tooltip title="添加好友" placement="bottom" className={classes.grid}>
                  <PersonAdd className={classes.icon} style={{ color: '#CD7FE2', marginRight: '50px' }} />
                </Tooltip>
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
                      <Typography className={classes.login} style={{ marginRight: '30px' }}>登录</Typography>
                    </Link>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                      <Typography className={classes.login}>注册</Typography>
                    </Link>

                  </View>
                }
              </Grid>

            </Grid>









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
            <LinearProgress color='primary' style={{ background: '#eee' }} />
            :

            this.props.children
          }


        </View>
      </div>

    )
  }
}

export default withStyles(styles)(NavBar) 