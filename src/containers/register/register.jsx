import React,{Component} from 'react'
/*注册路由组件*/
import {
    NavBar,
    WingBlank,
    WhiteSpace,
    InputItem,
    List,
    Radio,
    Button,
    Toast,
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from "../../redux/actions"
import Logo from "../../components/logo";
import './register.scss'
const ListItem = List.Item;
class Register extends Component{
    state = {
        type:'大神',
        username:'',
        password:'',
        passwordDir:'',
    };
    onchange = (type) =>{
        this.setState({
            type
        })
    };
    register = () =>{
        this.props.register(this.state)
    };
    handleChange = (name,val) =>{
        this.setState({
            [name]:val,
        })
    };

    render() {
        const {type} = this.state;
        const {msg,redirectTo} = this.props.user
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        return(
            <div>
                <NavBar>联合直聘</NavBar>
                <WhiteSpace size='xl'/>
                <Logo/>
                <WhiteSpace size='xl'/>
                <WingBlank>
                    <List>
                        {msg ? <div className={'error-msg'}>{msg}</div> : null}
                        <WhiteSpace size='md'/>
                        <InputItem placeholder={'请输入用户名'} clear onChange={val => this.handleChange('username',val)}>用户名：</InputItem>
                        <WhiteSpace size='md'/>
                        <InputItem placeholder={'请输入密码'} type={'password'} clear onChange={val => this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace size='md'/>
                        <InputItem placeholder={'请输入确认密码'} type={'password'} clear onChange={val => this.handleChange('passwordDir',val)}>确认密码：</InputItem>
                        <WhiteSpace size='md'/>
                        <ListItem>
                            <span>用户类型：</span>
                            <span >
                                &nbsp;&nbsp;&nbsp;<Radio  checked={type === '大神' } onChange={() => this.onchange('大神')}>大神</Radio>
                                &nbsp;&nbsp;&nbsp;<Radio  checked={type === '老板' } onChange={() => this.onchange('老板')}>老板</Radio>
                            </span>
                        </ListItem>

                        <ListItem>
                            <Button type={'primary'} onClick={() => this.register()}>注册</Button>
                        </ListItem>
                        <ListItem>
                            <Button onClick={() => this.props.history.replace('/login')}>已有账户</Button>
                        </ListItem>
                        <WhiteSpace size='md'/>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    {register}
)(Register)
