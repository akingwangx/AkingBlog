import React from 'react'
import { View } from 'react-web-dom'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '15px',
    '&:hover': {
      textDecoration: 'underline',
    },
  }
})
class ArctileInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { classes } = this.props
    return (
      <View style={{ marginTop: '20px', fontFamily: 'adelle-sans' }}>
        <span className={classes.title}>
          文章列表
        </span>
        <p>
           你还没发表过文章哦
        </p>
        <View>
          {/* <Typography variant='title'>
                  Parcel Vs Webpack
                </Typography>
               
                <span> Posted by xxx on 2017-12-27</span> */}
        </View>
      </View>
    )
  }
}

export default withStyles(styles)(ArctileInfo) 