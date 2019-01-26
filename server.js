const http = require('http').Server()
const io = require('socket.io')(http)

io.on('connection', client => {
  client.on('disconnect', function () {
    console.log('user disconnected')
  })
  client.on('sendMessage', data => {
    if (getUserName(client)==="Admin"){
      io.emit('messageArrived', data)
    }else{
      client.emit('messageArrived', data)
      Object.keys(io.sockets.connected).map((id) => {
        let s = io.sockets.connected[id]
        if (getUserName(s)==="Admin"){
          s.emit('messageArrived', data)
        }
      })
    }
  })
})

function getUserName (soket) {
  let cookies = soket.handshake.headers['cookie']
  return cookies.match(/user=(\w+)/)[1]

}

http.listen(3000, function () {
  console.log('listening on *:3000')
})
