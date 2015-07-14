module UtopicM {

  export class Boot extends Phaser.State {

    preload() {
      this.load.image('preloadBar', 'assets/img/loader.png');
    }

    create() {
      this.input.maxPointers = 1;
      this.stage.disableVisibilityChange = true;
      this.game.state.start('Preloader', true, false);
    }

  }
}
