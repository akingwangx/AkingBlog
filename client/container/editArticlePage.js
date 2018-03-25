import React from 'react'
import {
  Editor,
  createEditorState
} from 'medium-draft'
import { convertToRaw } from 'draft-js'
import 'medium-draft/lib/index.css'
import { View } from 'react-web-dom'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Save from 'material-ui-icons/Save'
import HelpOutline from 'material-ui-icons/HelpOutline'
import Icon from 'material-ui/Icon'
import DeleteIcon from 'material-ui-icons/Delete'
import Tooltip from 'material-ui/Tooltip'
import { connect } from 'react-redux'
import { uploadPost } from '../redux/post/post.redux'
import mediumDraftExporter from 'medium-draft/lib/exporter'
import { Redirect } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '700px',
    padding: '0 20px',
    margin: '35px 0 0 389px',
  },
  header: {
    textAlign: "center",
    height: '35px',
    color: '#684b4b',
    borderBottom: '1px solid #cbc5c5',
    marginBottom: "40px",
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
    minHeight: '900px',
    marginBottom: '20px'
  },
  btnGroup: {
    position: 'fixed',
    right: '5px',
    top: '525px'
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
  state => state,
  { uploadPost }
)
class EditArticlePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(),
      // for empty content
    }

    this.onChange = (editorState) => {
      this.setState({ editorState }
        //   ,()=>{
        //   const renderedHTML = mediumDraftExporter(this.state.editorState.getCurrentContent())
        //   console.log(renderedHTML)
        // }
      )
    }
    this.handleSave = this.handleSave.bind(this)
  }
  componentDidMount() {
    this.editor.focus();
  }
  handleSave() {
    const post = convertToRaw(this.state.editorState.getCurrentContent())
    
    let title = post.blocks.shift().text
    const content = post.blocks.map((item, index) => {
      return item.text
    }).concat().join("")
    const renderedHTML = mediumDraftExporter(this.state.editorState.getCurrentContent())//将String类型的HTML传到了服务器,然后接收下来回显
    this.props.uploadPost(renderedHTML, this.props.user._id,title,content)

  }
  render() {
    const { classes } = this.props
    const { editorState } = this.state
     const path =this.props.location.pathname
     const redirectTO=this.props.post.redirectTO
     console.log(this.props)
    return (
      <View className={classes.root}>
        {redirectTO&&redirectTO!=path ? <Redirect to={redirectTO} /> : null}
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <View className={classes.header}>
              <Typography style={{ color: '#777', fontSize: '15px', cursor: 'pointer' }}>
                给您最纯粹的写作体验
              </Typography>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center', marginBottom: '10px' }}>
              <Avatar src={this.props.user.avatar}/>
              <View style={{ marginLeft: '10px' }}>
                <Typography variant="title" className={classes.name}>
                  {this.props.user.nickname}
                    </Typography>
                <Typography style={{ fontSize: '14px', color: '#7d7e7e' }}>
                 {`@${this.props.user.user}`}
                    </Typography>
              </View>

            </View>
            <Paper className={classes.paper}>

              <Editor
                ref={(input) => { this.editor = input}}
                editorState={editorState}
                onChange={this.onChange}
                placeholder='开始你的写作,首行默认为标题'
              />
            </Paper>


          </Grid>

        </Grid>
        <View className={classes.btnGroup}>
          <Tooltip id="tooltip-fab" title="保存" className={classes.fab} placement="left">
            <Button
              variant="fab"
              aria-label="save"
              className={classes.button}
              style={{ background: '#E91E63' }}
              onClick={this.handleSave}
            >
              <Save />
            </Button>
          </Tooltip>
          <Tooltip id="tooltip-fab" title="文档指南" className={classes.fab} placement="left">
            <Button variant="fab" color="primary" aria-label="help" className={classes.button}>
              <HelpOutline />
            </Button>
          </Tooltip>
          <Tooltip id="tooltip-fab" title="删除" className={classes.fab} placement="left">
            <Button variant="fab" style={{ color: '#999' }} aria-label="delete" className={classes.button}>
              <DeleteIcon />
            </Button>
          </Tooltip>
        </View>
      </View>








    )
  }
}
export default withStyles(styles)(EditArticlePage) 