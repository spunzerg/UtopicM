module UtopicM {
  export class DummyPlayer extends Phaser.Sprite {
    game: Phaser.Game;
    playerSprite: Phaser.Sprite;
    id;

    constructor(game: Phaser.Game, x: number, y: number, id: string) {
      super(game, x, y, 'player', 0);
      this.anchor.setTo(0.5, 0);
      this.id = id;
      game.add.existing(this);
    }

    update() {
    }

  }
}
