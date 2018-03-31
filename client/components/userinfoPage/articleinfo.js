import React from 'react'
import { View } from 'react-web-dom'
import {Redirect} from 'react-router-dom'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import Visibility from 'material-ui-icons/Visibility'
import Tooltip from 'material-ui/Tooltip'
const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    minHeight: "120px"
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '15px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  postList: {
    marginTop: '30px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #eee',
    height: '30px',
  },
  postTitle: {
    fontSize: '18px',
    color: '#000',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})
class ArctileInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  handleClick(item){
this.props.getPost(item._id)
  }
  render() {
    const { classes } = this.props
    const { userPostList,redirectTO } = this.props.post
    const post = userPostList.map((item, index) => {
      return <View
                  key={item._id}
                  className={classes.postList}
       >
        <View style={{ flexDirection: 'row' }}>
          <Tooltip title={`${item.viewCount}人看过`} placement="left">
            <View style={{ marginRight: '25px', width: '40px', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
              <Visibility color='primary' style={{ width: '18px', height: '18px', marginRight: '5px' }} />
              <span style={{ fontSize: '14px', color: '#7d7e7e' }}>{item.viewCount}</span>
            </View>
          </Tooltip>
          <Typography 
          className={classes.postTitle}
          onClick={()=>{
            this.handleClick(item)
          }}
          >
            {item.postTitle}
          </Typography>
        </View>



        <span style={{ fontSize: '14px', color: '#7d7e7e' }}>
          {item.createday.slice(0, 10)}
        </span>
      </View>
    })
    return (
      <View style={{ fontFamily: 'adelle-sans' }}>
      {redirectTO ? <Redirect to={redirectTO} /> : null}
        <Paper className={classes.paper} elevation={1}>
          <span className={classes.title}>
            文章列表
        </span>
          {this.props.post.userPostList.length !== 0 ?
            post
            :
            <p>
              你还没发表过文章哦
        </p>
          }


        </Paper>

      </View>
    )
  }
}

export default withStyles(styles)(ArctileInfo) 