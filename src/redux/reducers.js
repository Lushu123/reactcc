/*包含多个reducer：根据老的state和指定的action返回一个新的state*/

import {combineReducers} from 'redux'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RESET_USER,
    RECEIVE_USER,
    RECEIVE_USER_LIST,
} from './action-types'

import {getRedirectTo} from '../utils/index'
const initUser = {
    username:'',
    type:'',
    msg:'',
    redirectTo:''
}
//得到dispatch传来的action,根据action中的type和data属性更新state(此处为user)
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            const {type,header} = action.data
            console.log(action.data)
            return {...action.data,redirectTo: getRedirectTo(type,header)}
        case ERROR_MSG:
            return {msg:action.data}
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return {...initUser,msg:action.data}
        default:
            return state
    }
}

const initUserList = []
//产生userList状态的reducer
function userList(state=initUserList,action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:
            return action.data
        default:
            return state
    }
}
//向外暴露的对象结构{f:0,f1:0}
export default combineReducers({
    user,
    userList
})

