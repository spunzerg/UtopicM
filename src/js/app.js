var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UtopicM;
(function (UtopicM) {
    var SimpleGame = (function (_super) {
        __extends(SimpleGame, _super);
        function SimpleGame() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', UtopicM.Boot, false);
            this.state.add('Preloader', UtopicM.Preloader, false);
            this.state.add('TitleScreen', UtopicM.TitleScreen, false);
            this.state.add('Level1', UtopicM.Level1, false);
            this.state.start('Boot', true, true);
        }
        return SimpleGame;
    })(Phaser.Game);
    UtopicM.SimpleGame = SimpleGame;
})(UtopicM || (UtopicM = {}));
window.onload = function () {
    var game = new UtopicM.SimpleGame();
};
