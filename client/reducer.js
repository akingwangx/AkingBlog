import { combineReducers } from 'redux'
import {user }from './redux/user/user.redux'
import {post} from './redux/post/post.redux'
export default combineReducers({user,post})