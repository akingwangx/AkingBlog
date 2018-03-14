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
  box: {
    borderBottom: '1px solid #e6ecf0',
    paddingBottom: '8px',
    minHeight: '48px',
    marginTop: '15px',
  },
  tag: {
    color: '#1DA1F2',
    fontWeight: '700',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    }
  }

})
class TopicBox extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { classes, list } = this.props
    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="title" style={{ fontSize: "18px", fontWeight: '900' }}>
          热门话题
        </Typography>
        {
          list.map((item, index) => {
            return (
              <div className={classes.box} key={item.name}>
                <View>
                  <Typography variant="body2" className={classes.tag}>
                    {item.tag}
                  </Typography>
                  <Typography style={{ fontSize: '12px', color: '#808080' }}>
                    18人看过
              </Typography>
                </View>
              </div>
            )
          })}

      </Paper>
    )
  }
}
export default withStyles(styles)(TopicBox);
