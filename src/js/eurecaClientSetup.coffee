class eurecaClientSetup
  constructor: ->
    @ready = false
    @eurecaServer = null
    @playerList = null
    @myId = null

    eurecaClient = new (Eureca.Client)
    eurecaClient.ready (proxy) =>
      @eurecaServer = proxy
      return

    eurecaClient.exports.setId = (id) =>
      @myId = id
      @ready = true
      return


module.exports = eurecaClientSetup
