Phaser = require 'Phaser'
eurecaSetup = require './eurecaClientSetup.coffee'
player = require './player.coffee'


class Game extends Phaser.State
  constructor: ->
    super
    @eurecaServer = null
    @player = null
    @upKey = false
    @downKey = false
    @leftKey = false
    @rightKey = false
    @eureca = null
    @playerList = null

  create: =>
    @eureca = new eurecaSetup
    @player = new player @eureca.myId, this
    console.log @player.id

    #Teclado
    @upKey = @game.input.keyboard.addKey(Phaser.Keyboard.UP)
    @downKey = @game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    @leftKey = @game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    @rightKey = @game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

  update: ->
    @playerList = @eureca.playerList


    if @upKey.isDown
      @player.y-=2
    else if @downKey.isDown
      @player.y+=2
    if @leftKey.isDown
      @player.x-=2
    else if @rightKey.isDown
      @player.x+=2

    if @eureca.ready is true
      if @input.activePointer.justPressed()
        @eureca.eurecaServer.holaMundo()

module.exports = Game
