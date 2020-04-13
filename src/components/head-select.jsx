import React,{Component} from 'react'
import PropTypes from 'prop-types'

import {
    List,
    Grid
} from 'antd-mobile'

export default class HeadSelect extends Component{
    static propTypes = {
        setHeader:PropTypes.func.isRequired
    }
    state = {
        icon:null,
    }
    constructor(props){
        super(props)
        this.headerArr = []
        for (let i = 0; i < 20; i++) {
            this.headerArr.push({
                text:'头像'+(i+1),
                icon:require(`../assets/images/header/头像${(i+1)}.png`)
            })
        }
    }
    chooseHead = ({icon,text}) => {
        this.setState({
            icon
        })
        this.props.setHeader(text)
    }

    render() {
        const {icon} = this.state
        const listHeader = !icon ? '请选择头像' : (
            <div>
                <p>已选择头像</p>
                <img src={icon}/>
            </div>
        )
        return(
            <div>
                <List renderHeader={() => listHeader}>
                    <Grid data={this.headerArr}
                          columnNum={5}
                    onClick={(el) => this.chooseHead(el)}/>
                </List>
            </div>
        )
    }
}
