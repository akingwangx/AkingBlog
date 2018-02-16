import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import SearchBar from 'material-ui-search-bar'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip'
import WbAuto from 'material-ui-icons/WbAuto'
import SpeakerNotes from 'material-ui-icons/SpeakerNotes'
import Notifications from 'material-ui-icons/Notifications'
import PersonAdd from 'material-ui-icons/PersonAdd'


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
    color:'#000',
    borderRadius:21,
    '&:hover': {
      color: '#03a9f4',
      background:'#fff',
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
    width: 60,
    height: 60,
    border:'1px solid #eee',
    marginLeft:35,
    cursor:'pointer',
  },




};
class NavBar extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="inherit">
          <Toolbar style={{ minHeight: 80, }}>
            <Typography variant="title" color="inherit">
              <WbAuto className={classes.logo} color="primary" />
            </Typography>
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              style={{
                marginLeft: 40,
                maxWidth: 220,
                borderRadius: 21,
                marginRight: 85,
              }} />

            {/* 导航栏 */}
            <Link to="/" style={{textDecoration:'none'}}>
            <Button className={classes.nav} color='primary'>Home</Button>
            </Link>         
            <Link to="/featuresPage" style={{textDecoration:'none'}}>
            <Button className={classes.nav} color='primary'>features</Button>        
            </Link>
            <Link to="/node" style={{textDecoration:'none'}}>
            <Button className={classes.nav} color='primary'>node</Button>        
            </Link>
            <Link to="/timeLine" style={{textDecoration:'none'}}>
            <Button className={classes.nav} color='primary' style={{marginRight:110}}>timeLine</Button>        
            </Link>

            {/* 功能按钮 */}
            <Tooltip title="评论" placement="bottom">
            <SpeakerNotes className={classes.icon} style={{  color: '#63BD70' }} />
            </Tooltip>
            <Tooltip title="通知" placement="bottom">
            <Notifications className={classes.icon} style={{ color: '#FBAB4A' }} />
            </Tooltip>
            <Tooltip title="添加好友" placement="bottom">
            <PersonAdd className={classes.icon} style={{ color: '#CD7FE2' }} />
            </Tooltip>

            <Tooltip title="个人资料与账号" placement="bottom-end">
            <div className={classes.row}>
              <Avatar
                alt="aking"
                src="https://pbs.twimg.com/profile_images/963377968029384704/F5Iwm31y_400x400.jpg"
                className={classes.avatar}
              />
            </div>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>

    )
  }
}


NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);