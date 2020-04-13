import io from 'socket.io-client'

//连接到服务器，得到代表连接的socket对象
const socket = io('ws://localhost:3000')

//绑定'receiveMsg'的监听，来接受服务器发送的请求
socket.on('receiveMsg',function (data) {
    console.log('浏览器接收到的数据',data)
})
socket.emit('sendMsg',{name:'Tom',data:Date.now()})
