eurecaClientSetup = exports ? this

@eurecaServer= null
@number = 1

@eurecaClientSetup = ->
  @number = 1
  #create an instance of eureca.io client
  eurecaClient = new (Eureca.Client)
  eurecaClient.ready (proxy) ->
    @eurecaServer = proxy
    @number = 2
    return
  #methods defined under "exports" namespace become available in the server side

  eurecaClient.exports.setId = (id) ->
    #create() is moved here to make sure nothing is created before uniq id assignation
    myId = id
    create()
    eurecaServer.handshake()
    ready = true
    return

  eurecaClient.exports.kill = (id) ->
    if tanksList[id]
      tanksList[id].kill()
      console.log 'killing ', id, tanksList[id]
    return

  eurecaClient.exports.spawnEnemy = (i, x, y) ->
    if i == myId
      return
    #this is me
    console.log 'SPAWN'
    tnk = new Tank(i, game, tank)
    tanksList[i] = tnk
    return

  return
