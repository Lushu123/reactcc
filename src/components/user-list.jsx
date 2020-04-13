import React,{Component} from 'react'
import {
    WingBlank,
    WhiteSpace,
    Card,
} from 'antd-mobile'
import PropTypes from 'prop-types'

const Header = Card.Header
const Body = Card.Body
export default class UserList extends Component{
    static propTypes = {
        userList:PropTypes.array.isRequired
    }
    render() {
        const {userList} = this.props
        return(
            <div style={{marginBottom:50,marginTop:50}}>
                <WhiteSpace/>
                <WingBlank>
                    {
                        userList.map(user => (
                            <div key={user._id}>
                                <Card>
                                    <Header
                                        thumb={user.header ? require(`../assets/images/header/${user.header}.png`) : null}
                                        extra={user.username}
                                    />
                                    <Body>
                                        <div>职位：{user.post}</div>
                                        {user.company ? <div>公司：{user.company}</div> :null}
                                        {user.salary ? <div>月薪：{user.salary}</div> :null}
                                        <div>描述：{user.info}</div>
                                    </Body>
                                </Card>
                                <WhiteSpace/>
                            </div>
                        ))
                    }

                </WingBlank>
            </div>
        )
    }
}
