import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { View } from 'react-web-dom'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: '15px'
  },
  attentionBox: {
    borderBottom: '1px solid #e6ecf0',
    paddingBottom: '8px',
    minHeight: '48px',
    marginTop: '15px',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    cursor: 'pointer'
  },
  name: {
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    '&:hover': {
      color: '#03a9f4',
      textDecoration: 'underline',
    }
  },
  btn: {
    width: '75px',
    height: '30px',
    borderRadius: '21px',
    color: '#fff',
    fontWeight: 'bold',
  }
})
class AttentionBox extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      isAttention:false,
      index:null
    }
  }
  render() {
    const { classes } = this.props
    const {outherUserList}=this.props.user
    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="title" style={{ fontSize: "18px", fontWeight: '900' }}>
          推荐关注
                 </Typography>
        {
          outherUserList.map((item, index) => {
            return (
              <View className={classes.attentionBox} key={item._id}>
                <View style={{ flexDirection: 'row', }}>
                  <Avatar
                    className={classes.avatar}
                    alt="Remy Sharp"
                    src={item.avatar}
                  />
                  <View style={{ marginLeft: '12px' }}>
                    <Typography variant="title" className={classes.name}>
                      {item.nickname}
                    </Typography>
                    <Typography style={{ fontSize: '14px', color: '#7d7e7e' }}>
                      {`@${item.user}`}
                    </Typography>
                  </View>
                </View>

                <Button 
                color="primary" 
                variant="raised" 
                className={classes.btn}
                onClick={()=>{
                 this.setState({
                   isAttention:!this.state.isAttention,
                   index:index,
                 })
               }}
                >
                {this.state.isAttention&&this.state.index==index?'已关注':'关注'}
               </Button>
              </View>
            )
          })}

      </Paper>
    )
  }
}
export default withStyles(styles)(AttentionBox);
