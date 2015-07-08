Phaser = require 'Phaser'

class Game extends Phaser.State
  constructor: ->
    super
    @eurecaServer = null
    @ready = false

  create: ->
    eurecaClient = new (Eureca.Client)
    eurecaClient.ready (proxy) ->
      @eurecaServer = proxy
      @ready = true
      return

  update: ->
    console.log @ready
    if @ready is true
      if @input.activePointer.justPressed()
        @eurecaServer.holaMundo()

module.exports = Game
