import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Button, InputItem, NavBar, TextareaItem} from "antd-mobile"
import HeadSelect from "../../components/head-select"
import {update} from '../../redux/actions'
class EmployeeInfo extends Component{
    state = {
        header:'',
        post:'',
        info:'',
    }
    handleChange = (name,val) => {
        this.setState({
            [name]:val
        })
    }
    save = () => {
        console.log(this.state)
        this.props.update(this.state)
    }
    setHeader = (header) => {
        this.setState({
            header
        })
    }
    render() {
        const {header,type} = this.props.user
        if(header){
            return <Redirect to={'/employee'}/>
        }
        return(
            <div>
                <NavBar>员工信息完善</NavBar>
                <HeadSelect setHeader={this.setHeader}/>
                <InputItem placeholder={'请输入求职岗位'} clear onChange={(val) => this.handleChange('post',val)}>求职岗位：</InputItem>
                <TextareaItem placeholder={'内容...'}
                              title={'个人简介：'}
                              rows={3}
                              clear
                              onChange={(val) => this.handleChange('info',val)}/>
                <Button type={'primary'} onClick={this.save}>保存</Button>
            </div>
        )
    }
}
export default connect(
    state => ({user:state.user}),
    {update}
)(EmployeeInfo)
