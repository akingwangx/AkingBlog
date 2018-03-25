import React from 'react'
import { View } from 'react-web-dom'
import { connect } from 'react-redux'
import { postinfo, addComments } from '../../redux/post/post.redux'
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
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
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
  },
  comment: {
    flexDirection: 'column',
    padding: '15px 40px 10px 24px',
    margin: '40px 0 30px 75px',
    background: '#E1F5FE',
    borderRadius: '10px',
    border: '1px solid #eee',
    width: '80%'
  },
  textField: {
    width: '90%',
    marginLeft: '10px',
    borderRadius: '8px',
    border: '2px solid #fff',
    '&:focus': {
      outline: 'none',
      border: '2px solid #B3E5FC'
    },
    fontSize: '14px',
    fontFamily: "sans-serif",
  },
  btn: {
    marginTop: '20px',
    width: '75px',
    height: '30px',
    borderRadius: '21px',
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  card: {
    borderBottom: '1px solid #eee',
    padding: '11px 30px',

  }

})


@connect(
  state => state,
  { postinfo, addComments }
)
class PostPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentValue: '',
      isloading:true,
    }
  }
  componentDidMount = () => {
    this.props.postinfo()
    setTimeout(()=>{
      this.setState({
        isloading:false,
      })
    },500)
  
  }
  componentWillMount = () => {
    window.scrollTo(0, 0)
  }
  handleChange = (event) => {
    this.setState({
      commentValue: event.target.value
    })
  }
  handleClick = () => {
    this.props.addComments(this.props.user.nickname, this.props.user.avatar, this.state.commentValue)
    window.location.href = window.location.href

  }
  render() {
    const { classes } = this.props
    return (
      <View className={classes.root}>
      {this.props.post.redirectTO ? <Redirect to={this.props.post.redirectTO} /> : null}
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <View style={{ flexDirection: "row", alignItems: 'center', marginBottom: '10px' }}>
                <Avatar src={this.props.post.author.avatar} />
                <View style={{ marginLeft: '10px' }}>
                  <Typography variant="title" className={classes.name}>
                    {this.props.post.author.nickname}
                  </Typography>
                  <Typography style={{ fontSize: '14px', color: '#7d7e7e' }}>
                    {`发布于${this.props.post.createday.slice(0, 10)}`}
                  </Typography>
                </View>
              </View>
              <div style={{ padding: '0 25px' }} dangerouslySetInnerHTML={{ __html: this.props.post.html }} />

              <View className={classes.comment}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '20px' }}>
                  <Avatar src={this.props.user.avatar} />
                  <textarea
                    placeholder='请发表评论'
                    className={classes.textField}
                    rows="5"
                    ref={(input) => { this.comment = input }}
                    onChange={this.handleChange}
                    value={this.state.commentValue}
                  ></textarea>
                </View>
                <Button
                  color='primary'
                  variant="raised"
                  className={classes.btn}
                  onClick={this.handleClick}
                >发表</Button>
              </View>
               {
                 this.state.isloading?
                 <CircularProgress className={classes.progress} size={50} />
                 :
                this.props.post.comments.map((item, index) => {
            return <div className={classes.card} key={index}>
                    <CardHeader
                      avatar={
                        <Avatar src={item.avatar} />
                      }
                      style={{ paddingBottom: 0 }}
                      title={item.nickname}
                      subheader={item.creatd}
                    />
                    <CardContent>
                      <Typography component="p">
                        {item.content}
                      </Typography>
                    </CardContent>
                  </div>
                })
              } 

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
              onClick={() => {
                this.comment.focus()
              }}
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