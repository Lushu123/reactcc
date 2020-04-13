//包含n个接口请求函数的模块（每个函数返回的都时promise对象）
import './ajax'
import ajax from "./ajax"

//请求注册
const reqRegister = (user) => ajax('/register',user,'POST')
//请求登陆
const reqLogin = ({username,password}) => ajax('/login',{username,password},'POST')
//更新用户接口
const reqUpdateUser = (user) => ajax("/update",user,'POST')
//获取用户信息
const reqUser = () => ajax('/user','GET')
//获取用户列表
const reqUserList = (type) => ajax('/userList',{type},'GET')

//export default 只能存在一个 导入不需要加{ }
// export可以存在多个 导入一定要加{ }
export {
    reqRegister,
    reqLogin,
    reqUpdateUser,
    reqUser,
    reqUserList,
}
