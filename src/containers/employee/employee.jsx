import React,{Component} from 'react'
import {connect} from 'react-redux'
import UserList from "../../components/user-list"
import {getUserList} from '../../redux/actions'

class Employee extends Component{
    componentDidMount() {
        this.props.getUserList('大神')
    }
    render() {
        const {userList} = this.props
        return(
            <UserList userList={userList}/>
        )
    }
}
export default connect(
    state => ({userList:state.userList}),
    {getUserList}
)(Employee)
