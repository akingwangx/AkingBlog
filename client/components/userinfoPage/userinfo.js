import React from 'react'
import { View } from 'react-web-dom'
import Typography from 'material-ui/Typography'
import DateRange from 'material-ui-icons/DateRange'
import {withStyles} from 'material-ui/styles'

const styles = theme => ({
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '15px',
    '&:hover': {
      textDecoration: 'underline',
    },

  },
  span: {
    fontSize: '13px',
    cursor: 'pointer',
    color: '#898d8d',
    marginBottom: '8px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
 
  render() {
    const { classes, nickname, user, createdate } = this.props
    return (
      <View style={{ margin: '25px 0 0 95px', }}>
        <span className={classes.title}>
          {nickname}
        </span>
        <span className={classes.span}>
          {`@${user}`}
        </span>
        <span className={classes.span}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <DateRange></DateRange>
            {`加入于${createdate.slice(0, 10)}`}
          </View>
        </span>
      </View>


    )
  }
}

export default withStyles(styles)(UserInfo)