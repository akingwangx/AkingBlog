import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

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

})
class AttentionBox extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const { classes, list } = this.props
    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="title" style={{ fontSize: "18px", fontWeight: '900' }}>
          推荐文章
        </Typography>
       {
         list.map((item,index)=>{
         return (
          <div className={classes.box} key={item.name}>

            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '12px' }}>
              <Typography variant="title" className={classes.name}>
                {item.name}
              </Typography>
              <Typography style={{ fontSize: '14px', color: '#7d7e7e' }}>
                {item.intro}
              </Typography>
            </div>
        </div>
         )
       })} 
    
      </Paper>
    )
  }
}
export default withStyles(styles)(AttentionBox);
