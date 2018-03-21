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


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '700px',
    padding: '0 20px',
    margin: '35px 0 0 389px',
  },
  header:{
    textAlign:"center",
    height:'35px',
    color:'#452',
    borderBottom:'1px solid #cbc5c5',
    marginBottom:"40px",
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
 
});
class EditArticlePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(),
      // for empty content
    }

    this.onChange = (editorState) => {
      this.setState({ editorState }, () => {
        const content = this.state.editorState.getCurrentContent()
        console.log(JSON.stringify(convertToRaw(content)))
      })
    }
  }

  componentDidMount() {
    this.refs.editor.focus();
  }
  render() {
    const { classes } = this.props
    const { editorState } = this.state;
    return (
      <View className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <View className={classes.header}>
            Give you the purest form of writing.
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center',marginBottom:'10px' }}>
              <Avatar color="primary">W</Avatar>
              <View style={{marginLeft:'10px'}}>
                <Typography variant="title" className={classes.name}>
                  王鑫
                    </Typography>
                <Typography style={{ fontSize: '14px', color: '#7d7e7e' }}>
                  @aking
                    </Typography>
              </View>

            </View>

            <Editor
              ref="editor"
              editorState={editorState}
              onChange={this.onChange}
              placeholder='开始你的写作'
            />

          </Grid>


        </Grid>
      </View>








    )
  }
}
export default withStyles(styles)(EditArticlePage) 