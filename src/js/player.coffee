class player
  constructor: (id, game) ->
    @game = game
    @player = @game.add.sprite @game.world.centerX, @game.world.centerY, 'playerSprite'
    @player.anchor.setTo 0.5, 0.5
    @id = id


module.exports = player
