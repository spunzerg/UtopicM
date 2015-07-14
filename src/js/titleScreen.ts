module UtopicM {

  export class TitleScreen extends Phaser.State {
    titleScreenImage: Phaser.Sprite;

    constructor() {
      super();
    }


    create() {
      var logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
      logo.anchor.setTo(0.5, 0.5);
      this.input.onTap.addOnce(this.titleClicked, this);
    }
    titleClicked() {
      this.game.state.start("Level1");
    }
  }
}
