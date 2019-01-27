const http = require('http').Server()
const io = require('socket.io')(http)

io.on('connection', client => {
  client.on('sendMessage', data => {
    if (getUserName(client) === 'Admin') {
      io.emit('messageArrived', data)
    } else {
      client.emit('messageArrived', data)
      Object.keys(io.sockets.connected).map((id) => {
        let s = io.sockets.connected[id]
        if (getUserName(s) === 'Admin') {
          s.emit('messageArrived', data)
        }
      })
    }
  })
})

/**
 * Возвращает имя пользователя из кук
 * @param socket
 * @returns {boolean || null}
 */
function getUserName (socket) {
  try {
    let cookies = socket.handshake.headers['cookie']
    let m = cookies.match(/user=(\w+)/)
    return m[1]
  } catch (err) {
    return null
  }
}

http.listen(3000, function () {})
