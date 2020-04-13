import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import './style/navFooter.scss'
const Item = TabBar.Item
class NavFooter extends Component{
    static propTypes = {
        navList:PropTypes.array.isRequired
    }

    render() {
        let {navList} = this.props
        const pathname = this.props.location.pathname
        navList = navList.filter(nav => !nav.hide)
        return(
            <TabBar tabBarPosition={'bottom'}>
                {
                    navList.map((nav) => (
                        <Item
                            key={nav.path}
                            title={nav.text}
                            icon={{uri:require(`../assets/images/nav/${nav.icon}.png`)}}
                            selectedIcon={{uri:require(`../assets/images/nav/${nav.icon}-selected.png`)}}
                            selected={pathname === nav.path}
                            onPress={() => this.props.history.replace(nav.path)}
                        />
                    ))
                }
            </TabBar>
        )
    }
}
export default withRouter(NavFooter)
