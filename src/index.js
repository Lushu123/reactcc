import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from "./redux/store";
import Login from "./containers/login/login";
import Register from "./containers/register/register";
import Main from "./containers/main/main";

import './test/socketio_test'

ReactDOM.render(
    (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route component={Main}/>  {/*默认组件*/}
                </Switch>
            </HashRouter>
        </Provider>

    ),
    document.getElementById('root'));


