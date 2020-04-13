/*包含多个action creator
* 异步action
* 同步action
* */
import {
    reqLogin,
    reqRegister,
    reqUpdateUser,
    reqUser,
    reqUserList,
} from '../api/index'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RESET_USER,
    RECEIVE_USER,
    RECEIVE_USER_LIST,
} from './action-types'

//授权成功的同步action
const authSuccess = (user) => ({type:AUTH_SUCCESS,data:user})
//错误提示信息的同步action
const errorMsg = (msg) => ({type:ERROR_MSG,data:msg})
//更新用户
const receiveUser = user => ({type:RECEIVE_USER,data:user})
//重置用户
export const resetUser = msg => ({type:RESET_USER,data:msg})
//接收用户列表的同步action
export const receiveUserList = userList => ({type:RECEIVE_USER_LIST,data:userList})

//注册action(获取新的state的逻辑)
export const register = (user) =>{
    const {username,password,passwordDir,type} = user
    //做表单的前台验证，如果不通过，返回一个同步的action
    if(!username){
        return errorMsg('用户名不能为空！')
    }else if(!password){
        return errorMsg('密码不能为空！')
    }else if(!passwordDir){
        return errorMsg('请再次确认密码！')
    }else if(password !== passwordDir){
        return errorMsg('两次密码不一致！')
    }

    return async dispatch =>{
        //传统写法：
        /*
            const promise = reqRegister(user)
            promise.then(res =>{
                const result = res.data
            })
        */
        //async写法
        const res = await reqRegister({username,password,type})
        const result = res.data
        if(result.code === 0){//注册成功
            dispatch(authSuccess(result.data))
        }else {//注册失败
            dispatch(errorMsg(result.msg))
        }
    }
}
//登陆action
export const login = (user) =>{
    const {username,password} = user
    //做表单的前台验证，如果不通过，返回一个同步的action
    if(!username){
        return errorMsg('用户名不能为空！')
    }else if(!password){
        return errorMsg('密码不能为空！')
    }
    return async dispatch =>{
        const res = await reqLogin({username,password})
        const result = res.data
        if(result.code === 0){//登陆成功
            dispatch(authSuccess(result.user))
        }else {//登陆失败
            dispatch(errorMsg(result.msg))
        }
    }
}
//更新用户的action
export const update = (user) => {
    return async dispatch =>{
        const res = await reqUpdateUser(user)
        const result = res.data
        console.log(result)
        if(result.code === 0){
            dispatch(receiveUser(result.data))
        }else {
            dispatch(resetUser(result.msg))
        }
    }
}
export const getUser  = () =>{
    return async dispatch  =>{
        const res = await reqUser()
        const result = res.data
        if(result.code === 0){
            dispatch(receiveUser(result.data))
        }else {
            dispatch(resetUser(result.msg))
        }
    }
}

export const getUserList = (type) => {
    return async dispatch  =>{
        const res = await reqUserList(type)
        const result = res.data
        if(result.code === 0){
            dispatch(receiveUserList(result.data))
        }else {
            dispatch(resetUser(result.msg))
        }
    }
}
