import ElementUI from 'element-ui'

// class myWebSocket extends WebSocket{
//     data = 'http://192.168.137.221:8000/media/test.png'
// }

let ws_data = {}

function initWebSocket () {
    const wsUri = 'ws://192.168.137.126:8000/ws/'
    this.socket = new WebSocket(wsUri)// 这里面的this都指向vue
    this.socket.onerror = webSocketOnError
    this.socket.onmessage = webSocketOnMessage
    this.socket.onclose = closeWebsocket
}

function webSocketOnError (e) {
    ElementUI.Notification({
        title: '',
        message: 'WebSocket连接发生错误' + JSON.stringify(e),
        type: 'error',
        position: 'bottom-right',
        duration: 3000
    })
}
function webSocketOnMessage (e) {
    const data = JSON.parse(e.data)
    // console.log(data)
    if (data.contentType === 'INFO') {
        ElementUI.Notification({
            title: 'websocket',
            message: data.content,
            type: 'success',
            position: 'bottom-right',
            duration: 3000
        })
    } else if (data.contentType === 'ERROR') {
        ElementUI.Notification({
            title: '',
            message: data.content,
            type: 'error',
            position: 'bottom-right',
            duration: 0
        })
    } else if (data.contentType === 'TEXT') {
        ElementUI.Notification({
            title: '温馨提示',
            message: data.content,
            type: 'success',
            position: 'bottom-right',
            duration: 0
        })
    } else {
        ws_data[data.content.node_id] = {img: data.content.img, status: data.content.status}
        console.log('ws_data测试', ws_data)
    }
}
// 关闭websocket
function closeWebsocket () {
    console.log('连接已关闭...')
    close()
}
function close () {
    this.socket.close() // 关闭 websocket
    this.socket.onclose = function (e) {
        console.log(e)// 监听关闭事件
        console.log('关闭')
    }
}
function webSocketSend (message) {
    this.socket.send(JSON.stringify(message))
}

function getWsData () {
    let newData = ws_data
    return newData
}

function clearWsData () {
    ws_data = {}
}

export default {
    initWebSocket, close, webSocketSend, ws_data, getWsData, clearWsData
}
