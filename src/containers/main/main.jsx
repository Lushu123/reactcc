import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {NavBar} from 'antd-mobile'
import BoosInfo from '../boos-info/boos-info'
import EmployeeInfo from '../employee-info/employee-info'
import Boos from '../boos/boos'
import Employee from '../employee/employee'
import Message from '../message/message'
import Personal from '../personal/personal'
import NotFount from "../../components/not-found"
import NavFooter from "../../components/nav-footer"

import './main.scss'

import cookie from 'js-cookie' //可以操作前台cookie

import {getRedirectTo} from '../../utils'
import {getUser} from '../../redux/actions'
/*主界面路由组件*/
class Main extends Component{
    navList = [
        {
            path:'/employee',
            component:Employee,
            title:'老板列表',
            icon:'laoban',
            text:'老板'
        },
        {
            path:'/boos',
            component:Boos,
            title:'大神列表',
            icon:'dashen',
            text:'大神'
        },
        {
            path:'/message',
            component:Message,
            title:'消息列表',
            icon:'message',
            text:'消息'
        },
        {
            path:'/personal',
            component:Personal,
            title:'用户中心',
            icon:'personal',
            text:'个人'
        },
    ]
    componentDidMount() {
        //cookie中有userid，但是你关闭当前窗口，重新请求的时候，state中的user已为默认值
        //故做以下判断，进行自动登陆
        const userid = cookie.get('userid')
        const {_id} = this.props.user
        if(userid && !_id){
            console.log('发送ajax获取user')
            this.props.getUser()
        }
    }

    render() {
        const userid = cookie.get('userid')
        //如果userid为空自动重定向到登陆界面
        if(!userid){
            return <Redirect to={'/login'}/>
        }
        const {user,location} = this.props
        //如果没有_id，返回null
        if(!user._id){
            return null
        }else {
            //如果有id，跳转到对应界面
            //如果请求根路径，根据user的type和header判断跳转到对应界面
            let path = location.pathname
            if(path === '/'){
                path = getRedirectTo(user.type,user.header)
                return <Redirect to={path}/>
            }
        }

        const {navList} = this
        const path = this.props.location.pathname
        const curNav = navList.find(nav => nav.path === path)
        if(curNav){
            if(user.type === 'laoban'){
                navList[1].hide = true
            }else {
                navList[0].hide = true
            }
        }
        return(
            <div>
                {curNav ? <NavBar className={'sticky-header'}>{curNav.title}</NavBar> : null}
                <Switch>
                    {
                        navList.map(nav => <Route key={nav.path} path={nav.path} component={nav.component}/>)
                    }
                    <Route path={'/boosInfo'} component={BoosInfo}/>
                    <Route path={'/employeeInfo'} component={EmployeeInfo}/>
                    <Route component={NotFount}/>
                </Switch>
                {curNav ? <NavFooter navList={navList}/> : null}
            </div>
        )
    }
}
export default connect(
    state => ({user:state.user}),
    {getUser}
)(Main)
/*
* 实现自动登陆：
* */
