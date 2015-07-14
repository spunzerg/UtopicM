module UtopicM {

  export class SimpleGame extends Phaser.Game {

    constructor() {
      super(800, 600, Phaser.AUTO, 'content', null);
      this.state.add('Boot', Boot, false);
      this.state.add('Preloader', Preloader, false);
      this.state.add('TitleScreen', TitleScreen, false);
      this.state.add('Level1', Level1, false);

      this.state.start('Boot', true, true);
    }
  }


}

window.onload = () => {
  var game = new UtopicM.SimpleGame();
};
