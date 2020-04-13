import React,{Component} from 'react'
/*登陆路由组件*/
import {
    NavBar,
    WingBlank,
    WhiteSpace,
    InputItem,
    List,
    Button,
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from "../../redux/actions"
import Logo from "../../components/logo";
const ListItem = List.Item;
class Login extends Component{
    state = {
        username:'',
        password:'',
    };
    handleChange = (name,val) =>{
        this.setState({
            [name]:val,
        })
    };
    login = () =>{
        this.props.login(this.state)
        // console.log(this.state)
    };

    render() {
        const {msg,redirectTo} = this.props.user
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        return(
            <div>
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
                            <ListItem>
                                <Button type={'primary'} onClick={() => this.login()}>登陆</Button>
                            </ListItem>
                            <ListItem>
                                <Button  onClick={() => this.props.history.replace('/register')}>注册账号</Button>
                            </ListItem>
                            <WhiteSpace size='md'/>
                        </List>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    {login}
)(Login)
