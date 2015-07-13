module UtopicM {

  export class TitleScreenState extends Phaser.State {
    game: Phaser.Game;
    titleScreenImage: Phaser.Sprite;

    constructor() {
      super();
    }

    preload() {
      this.load.image('logo', 'assets/img/phaser.png');
    }
    create() {
      var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
      logo.anchor.setTo(0.5, 0.5);
      this.input.onTap.addOnce(this.titleClicked, this);
    }
    titleClicked() {
      this.game.state.start("GameRunningState");
    }
  }

  export class GameRunningState extends Phaser.State {
    constructor() {
      super();
    }
    textValue: Phaser.Text;
    updateCount: number;
    downKey;
    upKey;
    leftKey;
    rightKey;
    player;

    preload() {
      this.load.image('player', 'assets/img/player.png');
    }

    create() {
      var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
      this.textValue = this.game.add.text(0, 0, "0", style);
      this.updateCount = 0;
      this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
      this.player.anchor.setTo(0.5, 0.5)

      //Entradas de teclado
      this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
      this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
      this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    }

    update() {
      this.textValue.text = (this.updateCount++).toString();

      if (this.upKey.isDown) {
        this.player.y -= 2;
      } else if (this.downKey.isDown) {
        this.player.y += 2;
      }
      if (this.leftKey.isDown) {
        this.player.x -= 2;
      } else if (this.rightKey.isDown) {
        this.player.x += 2;
      }
    }

    render() {
      this.game.debug.text("This is drawn in render()", 0, 80);
    }
  }


  export class SimpleGame {

    game: Phaser.Game;
    constructor() {
      this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
      this.game.state.add("GameRunningState", GameRunningState, false);
      this.game.state.add("TitleScreenState", TitleScreenState, false);
      this.game.state.start("TitleScreenState", true, true);
    }
  }


}

window.onload = () => {
  var game = new UtopicM.SimpleGame();
};
