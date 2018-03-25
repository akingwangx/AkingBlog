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
  }

  render() {
    const { classes, list } = this.props
    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="title" style={{ fontSize: "18px", fontWeight: '900' }}>
          推荐关注
                 </Typography>
        {
          list.map((item, index) => {
            return (
              <View className={classes.attentionBox} key={item.name}>
                <View style={{ flexDirection: 'row', }}>
                  <Avatar
                    className={classes.avatar}
                    alt="Remy Sharp"
                    src={item.avatar}
                  />
                  <View style={{ marginLeft: '12px' }}>
                    <Typography variant="title" className={classes.name}>
                      {item.name}
                    </Typography>
                    <Typography style={{ fontSize: '14px', color: '#7d7e7e' }}>
                      {item.intro}
                    </Typography>
                  </View>
                </View>

                <Button color="primary" variant="raised" className={classes.btn}>
                  关注
               </Button>
              </View>
            )
          })}

      </Paper>
    )
  }
}
export default withStyles(styles)(AttentionBox);
