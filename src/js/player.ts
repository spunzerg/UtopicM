module UtopicM {
  export class Player extends Phaser.Sprite {
    game: Phaser.Game;
    playerSprite: Phaser.Sprite;
    downKey;
    upKey;
    leftKey;
    rightKey;

    constructor(game: Phaser.Game, x: number, y: number) {
      super(game, x, y, 'player', 0);
      this.anchor.setTo(0.5, 0);
      game.add.existing(this);

      this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
      this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
      this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    }



    update() {
      if (this.upKey.isDown) {
        this.y -= 2;
      } else if (this.downKey.isDown) {
        this.y += 2;
      }
      if (this.leftKey.isDown) {
        this.x -= 2;
      } else if (this.rightKey.isDown) {
        this.x += 2;
      }
    }

  }
}