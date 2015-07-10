Phaser = require 'Phaser'
eurecaSetup = require './eurecaClientSetup.coffee'

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
    eurecaSetup.eurecaClientSetup()
    @eurecaServer = eurecaSetup.eurecaServer
    @ready = true
    @player = @add.sprite @game.world.centerX, @game.world.centerY, 'playerSprite'
    @player.anchor.setTo 0.5, 0.5

    #Teclado
    @upKey = @game.input.keyboard.addKey(Phaser.Keyboard.UP)
    @downKey = @game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    @leftKey = @game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    @rightKey = @game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

  update: ->
    console.log eurecaSetup.eurecaClientSetup.number
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
