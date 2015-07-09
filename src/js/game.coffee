Phaser = require 'Phaser'


class Game extends Phaser.State
  constructor: ->
    super
    @eurecaServer = null
    @ready = false
    @player = null
    @upKey = false
    @downKey = false
    @leftKey = false
    @rightKey = false

  create: =>
    @player = @add.sprite @game.world.centerX, @game.world.centerY, 'playerSprite'
    @player.anchor.setTo 0.5, 0.5

    #Teclado
    @upKey = @game.input.keyboard.addKey(Phaser.Keyboard.UP)
    @downKey = @game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    @leftKey = @game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    @rightKey = @game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

    eurecaClient = new (Eureca.Client)
    eurecaClient.ready (proxy) ->
      @eurecaServer = proxy
      @ready = true
      return

  update: ->
    if @upKey.isDown
      @player.y-=2
    else if @downKey.isDown
      @player.y+=2
    if @leftKey.isDown
      @player.x-=2
    else if @rightKey.isDown
      @player.x+=2

    if @ready is true
      if @input.activePointer.justPressed()
        @eurecaServer.holaMundo()

module.exports = Game
