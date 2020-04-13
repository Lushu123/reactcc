/*redux最核心管理对象模块*/
import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";//中间件
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from "./reducers";



//向外暴露store对象
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
