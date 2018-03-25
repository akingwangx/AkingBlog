import React from 'react'
import { View } from 'react-web-dom'
import { connect } from 'react-redux'
import { postinfo } from '../../redux/post/post.redux'
import { convertToRaw } from 'draft-js';
import { Editor, createEditorState } from 'medium-draft';
import mediumDraftImporter from 'medium-draft/lib/importer';
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import 'medium-draft/lib/basic.css'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import Tooltip from 'material-ui/Tooltip'
import Button from 'material-ui/Button'
import HelpOutline from 'material-ui-icons/HelpOutline'
import Icon from 'material-ui/Icon'
import DeleteIcon from 'material-ui-icons/Delete'
import ThumbUp from 'material-ui-icons/ThumbUp'
import Edit from 'material-ui-icons/Edit'
import Textsms from 'material-ui-icons/Textsms'
import OpenInNew from 'material-ui-icons/OpenInNew'
import { Redirect } from 'react-router-dom'
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '800px',
    padding: '0 20px',
    margin: '15px 0 0 345px',
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
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: '15px',
    minHeight: '800px',
    marginBottom: '20px'
  },
  btnGroup: {
    position: 'fixed',
    left: '245px',
    top: '300px'

  },
  button: {
    color: '#fff',
    fontWeight: "bold",
    marginBottom: '9px'
  },
  fab: {
    width: '85px'
  }

})


@connect(
  state => state.post,
  { postinfo }
)
class PostPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    this.props.postinfo()
  }
  componentWillMount=()=>{
    window.scrollTo(0,0)
  }
  render() {
    const { classes } = this.props
    return (

      <View className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <View style={{ flexDirection: "row", alignItems: 'center', marginBottom: '10px' }}>
                <Avatar src={this.props.author.avatar} />
                <View style={{ marginLeft: '10px' }}>
                  <Typography variant="title" className={classes.name}>
                    {this.props.author.nickname}
                </Typography>
                  <Typography style={{ fontSize: '14px', color: '#7d7e7e' }}>
                    { `发布于${this.props.createday.slice(0, 10)}`}
                  </Typography>
                </View>
              </View>
              <div style={{padding:'0 25px'}} dangerouslySetInnerHTML={{ __html: this.props.html }} />
            </Paper>


          </Grid>

        </Grid>
        <View className={classes.btnGroup}>
          <Tooltip id="tooltip-fab" title="点赞" className={classes.fab} placement="left">
            <Button
              variant="fab"
              aria-label="save"
              className={classes.button}
              style={{ background: '#F44336' }}
            >
              <ThumbUp />
            </Button>
          </Tooltip>
          <Tooltip id="tooltip-fab" title="评论" className={classes.fab} placement="left">
            <Button
              variant="fab"
              aria-label="textsms"
              className={classes.button}
              style={{ background: '#63BD70' }}
            >
              <Textsms />
            </Button>
          </Tooltip>
          <Tooltip id="tooltip-fab" title="转发" className={classes.fab} placement="left">
            <Button variant="fab" color="primary" aria-label="openinnew" className={classes.button}>
              <OpenInNew />
            </Button>
          </Tooltip>
        </View>
      </View>

    )
  }
}

export default withStyles(styles)(PostPage) 