//动态计算路由

let getRedirectTo = (type,header) => {
    let path;

    if(type === '老板'){
        path = '/boos'
    }else {
        path = '/employee'
    }

    if(!header){
        path = path + 'Info'
    }
    return path
}

export {
    getRedirectTo,
}
