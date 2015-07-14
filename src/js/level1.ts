module UtopicM {
  declare var io;

  export class Level1 extends Phaser.State {

    textValue: Phaser.Text;
    updateCount: number;
    player: UtopicM.Player;
    socket;
    playerList: UtopicM.DummyPlayer[] = [];

    create() {
      this.socket = io();
      var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
      this.textValue = this.game.add.text(0, 0, "0", style);
      this.updateCount = 0;
      //this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
      //this.player.anchor.setTo(0.5, 0.5)
      this.socket.on('clientValidated', this.addPlayer.bind(this));
    }

    addPlayer(data) {
      this.player = new Player(this.game, 130, 284, data.id);
      for (var playerId in data.playerList) {
        if (playerId != data.id) {
          var dp = new DummyPlayer(this.game, 130, 284, playerId);
          this.playerList.push(dp);
        }
      }

    }

    update() {
      this.textValue.text = (this.updateCount++).toString();
    }

    render() {
      this.game.debug.text("This is drawn in render()", 0, 80);
    }
  }
}
