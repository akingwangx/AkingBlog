import React from 'react'
import Paper from 'material-ui/Paper'
import { View } from 'react-web-dom'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: '15px',
    minHeight: '212px',
    padding: '0',
    position: 'relative'
  },
  header: {
    width: '100%',
    height: '106px',
    background: '#4FC3F7',
  },
  content: {
    padding: '0 16px 0 16px'
  },
  avatar: {
    width: '72px',
    height: '72px',
    position: 'absolute',
    cursor: 'pointer',
    top: '72px',
    left: '15px',
    border: '2px solid #fff'
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
    fontWeight: 'bold',
  },

})
class UserCard extends React.Component {
  render() {
    const { classes, avatar, history } = this.props
    return (
      <Paper className={classes.paper} elevation={1}>
        <View className={classes.header} ></View>
        <View className={classes.content}>
          <Avatar
            src={avatar ? avatar : null}
            className={classes.avatar}
            onClick={() => {
              history.push('/userinfo')
            }}
          >
            {avatar ? null : nickname[0]}
          </Avatar>
          <Typography
            variant='title'
            className={classes.title}
            onClick={() => {
              history.push('/userinfo')
            }}
          >
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
export default withStyles(styles)(UserCard)