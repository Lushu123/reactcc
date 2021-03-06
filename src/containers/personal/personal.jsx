import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Button,Modal} from 'antd-mobile'
import Cookie from 'js-cookie'

import {resetUser} from '../../redux/actions'

const Brief = List.Item.Brief
const Item = List.Item
class Personal extends Component{

    logout = () =>{
        Modal.alert('退出','确认退出登陆吗？',[
            {
                text:'取消',
                onPress:() => {


                }
            },
            {
                text:'确认',
                onPress:() => {
                    Cookie.remove('userid')
                    this.props.resetUser('')
                }
            }
        ])
        console.log(11)
    }
    render() {
        const {header,username,company,post,salary,info} = this.props.user
        return(
            <div style={{marginTop:50}}>
                <Result
                    img={<img src={require(`../../assets/images/header/${header}.png`)} style={{width:50}} alt={'header'}/>}
                    title={username}
                    message={company}
                />

                <List renderHeader={() => '相关信息'}>
                    <Item multipleLine>
                        <Brief>职位：{post}</Brief>
                        <Brief>简介：{info}</Brief>
                        {salary ? <Brief>薪资：{salary}</Brief> :null}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Button type={'warning'} onClick={this.logout}>退出</Button>
                </List>
            </div>
        )
    }
}
export default connect(
    state => ({user:state.user}),
    {resetUser}
)(Personal)
