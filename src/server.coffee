express = require('express')
app = express(app)
server = require('http').createServer(app)
# serve static files from the current directory
app.use express.static(__dirname)
#we'll keep clients data here
clients = {}
#get EurecaServer class
Eureca = require('eureca.io')
#create an instance of EurecaServer
eurecaServer = new (Eureca.Server)(allow: [
  'setId'
  'spawnEnemy'
  'kill'
  'updateState'
])
#attach eureca.io to our http server
eurecaServer.attach server
#eureca.io provides events to detect clients connect/disconnect
#detect client connection
eurecaServer.onConnect (conn) ->
  console.log 'New Client id=%s ', conn.id, conn.remoteAddress
  #the getClient method provide a proxy allowing us to call remote client functions
  remote = eurecaServer.getClient(conn.id)
  #register the client
  clients[conn.id] =
    id: conn.id
    remote: remote
  return
#detect client disconnection
eurecaServer.onDisconnect (conn) ->
  console.log 'Client disconnected ', conn.id
  removeId = clients[conn.id].id
  delete clients[conn.id]
  for c of clients
    remote = clients[c].remote
    #here we call kill() method defined in the client side
    remote.kill conn.id
  return


eurecaServer.exports.holaMundo = ->
  console.log "Hola Mundo!"

eurecaServer.exports.handshake = ->
  for c of clients
    remote = clients[c].remote
    for cc of clients
      #send latest known position
      x = if clients[cc].laststate then clients[cc].laststate.x else 0
      y = if clients[cc].laststate then clients[cc].laststate.y else 0
      remote.spawnEnemy clients[cc].id, x, y
  return

#be exposed to client side

eurecaServer.exports.handleKeys = (keys) ->
  conn = @connection
  updatedClient = clients[conn.id]
  for c of clients
    remote = clients[c].remote
    remote.updateState updatedClient.id, keys
    #keep last known state so we can send it to new connected clients
    clients[c].laststate = keys
  return

server.listen 8000
