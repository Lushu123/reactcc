import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button
} from 'antd-mobile'
import HeadSelect from "../../components/head-select"
import {update} from '../../redux/actions'
class BoosInfo extends Component{
    state = {
        header:'',
        post:'',
        info:'',
        company:'',
        salary:'',
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
            return <Redirect to={'/boos'}/>
        }
        return(
            <div>
                <NavBar>老板信息完善</NavBar>
                <HeadSelect setHeader={this.setHeader}/>
                <InputItem placeholder={'请输入招聘职位'} clear onChange={(val) => this.handleChange('post',val)}>招聘职位：</InputItem>
                <InputItem placeholder={'请输入公司名称'} clear onChange={(val) => this.handleChange('company',val)}>公司名称：</InputItem>
                <InputItem placeholder={'请输入职位薪资'} clear onChange={(val) => this.handleChange('salary',val)}>职位薪资：</InputItem>
                <TextareaItem placeholder={'内容...'}
                              title={'职位要求：'} rows={3}
                              clear
                              onChange={(val) => this.handleChange('info',val)}/>
                <Button type={'primary'} onClick={() => this.save()}>保存</Button>
            </div>
        )
    }
}
export default connect(
    state => ({user:state.user}),
    {update}
)(BoosInfo)
