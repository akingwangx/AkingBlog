import axios from 'axios'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'//注册成功
const LOGIN_SUCCESS='LOGIN_SUCCESS'        //登录成功
const ERROR_MSG = 'ERROR_MSG'              //错误信息
const LOAD_DATA='LOAD_DATA'                //登录信息
const LOGOUT_SUBMIT='LOGOUT_SUBMIT'        //注销
const initState = { 
  msg: '',
  user: '',
  nickname:'',
  redirectTO:'',
  avatar:'',
  isAuth: false,
}
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, msg: '',isAtuh:true,redirectTO:'/userInfo',...action.payload }
      case LOGIN_SUCCESS:
      return { ...state, msg: '',isAuth:true,redirectTO:'/',...action.payload }
     case LOAD_DATA:
     return {...state,isAuth:true,...action.payload}
     case LOGOUT_SUBMIT:
     return {...state,redirectTO:'/login'}
      case ERROR_MSG:
      return { ...state, msg: action.msg }
    default:
      return state
  }
}
function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}
function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data }
}
function loginSuccess(data){
  return {type:LOGIN_SUCCESS,payload:data}
}
function loadData(data){
  return {type:LOAD_DATA,payload:data}
}
export function logoutSubmit(){
  return {type:LOGOUT_SUBMIT}
}
export function register({ user, nickname, password, apassword }) {
  const passwordreg = /^.{6,}$/
  const nickreg = /^[\u0391-\uFFE5A-Za-z]+$/
  if (!user || !password) {
    return errorMsg('请输入用户名和密码')
  }
  if (password !== apassword) {
    return errorMsg('两次密码输入不同,请重新输入')
  }
  if (!nickname) {
    return errorMsg('请填写昵称')
  }
  if (!nickreg.test(nickname)) {
    return errorMsg('昵称格式不正确')
  }
  if (!passwordreg.test(password)) {
    return errorMsg('密码需大于6位')
  }
  return dispatch => {
    axios.post('/api/user/register', { user, nickname, password, apassword })
      .then(res => {
        console.log(res.status)
        if (res.status == 200 && res.data.code === 0) {
          dispatch(registerSuccess({ user, nickname, password, apassword }))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}
export function login({ user, password}) {
  if (!user || !password) {
    return errorMsg('请输入用户名和密码')
  }
  return dispatch => {
    axios.post('/api/user/login', { user, password })
      .then(res => {
        if (res.status == 200 && res.data.code === 0) {
          dispatch(loginSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}
export function userinfo(){
  //获取用户信息
  return dispatch=>{
    axios.get('/api/user/info').
    then(res=>{
      if(res.status==200){
        if(res.data.code==0){
          dispatch(
            loadData(res.data.data)
          )
          //有登录信息
        }
      }
    })
  }
}