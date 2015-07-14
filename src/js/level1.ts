module UtopicM {
  declare var io;

  export class Level1 extends Phaser.State {

    textValue: Phaser.Text;
    updateCount: number;
    player: UtopicM.Player;
    socket;

    preload() {

    }

    create() {
      this.socket = io();
      this.socket=io();
      var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
      this.textValue = this.game.add.text(0, 0, "0", style);
      this.updateCount = 0;
      this.player = new Player(this.game, 130, 284);
      //this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
      //this.player.anchor.setTo(0.5, 0.5)

      //Entradas de teclado
      /*this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
      this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
      this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);*/
    }

    update() {
      this.textValue.text = (this.updateCount++).toString();
      /*
      if (this.upKey.isDown) {
        this.player.y -= 2;
      } else if (this.downKey.isDown) {
        this.player.y += 2;
      }
      if (this.leftKey.isDown) {
        this.player.x -= 2;
      } else if (this.rightKey.isDown) {
        this.player.x += 2;
      }*/
    }

    render() {
      this.game.debug.text("This is drawn in render()", 0, 80);
    }
  }
}
