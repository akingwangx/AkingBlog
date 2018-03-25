import axios from 'axios'

const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS' //文章上传
const GETPOST_SUCCESS = 'GETPOST_SUCCESS'//取文章
const LOAD_POST = 'LOAD_POST'           //显示文章
const GETALLPOST_SUCCESS = 'GETALLPOST_SUCCESS' //取全部文章
const initState = {
  postTitle: '',//文章标题
  author: {},//作者信息
  postContent: '',//文章内容
  redirectTO: '',//跳转路径
  createday: '',//文章发表日期
  category: '',//文章分类
  comment: '',//评论内容
  likedCount: 0,//点赞数
  viewCount: 0,//阅读数,
  html: '',
  postList:[],
  isLoading:true
}


export function post(state = initState, action) {
  switch (action.type) {
    case UPLOAD_SUCCESS:
      return { ...state, redirectTO: '/postPage',isLoading:false, ...action.payload }
    case LOAD_POST:
      return { ...state, redirectTO: '',isLoading:false, ...action.payload  }
    case GETALLPOST_SUCCESS:
      return { ...state,isLoading:false, postList:action.payload}
    case GETPOST_SUCCESS:
    return {...state,redirectTO: '/postPage',...action.payload}
    default:
      return state
  }
}
function uploadSuccess(data) {
  return { type: UPLOAD_SUCCESS, payload: data }
}
function getpostSuccess(data) {
  return { type: GETPOST_SUCCESS, payload: data }
}
function loadPost(data) {
  return { type: LOAD_POST, payload: data }
}
function getAllPostSuccess(data){
  return {type:GETALLPOST_SUCCESS,payload:data}
}
export function uploadPost(html, userid, title, content) {
  return dispatch => {
    axios.post('/api/post/upload', { html, userid, title, content })
      .then(res => {
        if (res.status == 200 && res.data.code === 0) {
          dispatch(uploadSuccess(res.data.data))
        } else {
          console.log('失败')
        }
      })
  }
}
export function postinfo() {
  //获取文章信息
  return dispatch => {
    axios.get('/api/post/postinfo').
      then(res => {
        if (res.status == 200) {
          if (res.data.code == 0) {
            dispatch(
              loadPost(res.data.data)
            )
            //有登录信息
          }
        }
      })
  }
}
//首页全部文章列表
export function getAllPost() {
  return dispatch => {
    axios.get('/api/post/allpost').
      then(res => {
        if (res.status == 200 && res.data.code === 0) {
          dispatch(getAllPostSuccess(res.data.data))
        }
      })
  }
}
//获取单个文章
export function getPost(id){
return dispatch=>{
  axios.get(`/api/post/getpost?id=${id}`).
  then(res=>{
    if (res.status == 200 && res.data.code === 0) {
      dispatch(getpostSuccess(res.data.data))
    }
  })
}
}