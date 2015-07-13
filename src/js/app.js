var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UtopicM;
(function (UtopicM) {
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.call(this);
        }
        TitleScreenState.prototype.preload = function () {
            this.load.image('logo', 'assets/img/phaser.png');
        };
        TitleScreenState.prototype.create = function () {
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
            this.input.onTap.addOnce(this.titleClicked, this);
        };
        TitleScreenState.prototype.titleClicked = function () {
            this.game.state.start("GameRunningState");
        };
        return TitleScreenState;
    })(Phaser.State);
    UtopicM.TitleScreenState = TitleScreenState;
    var GameRunningState = (function (_super) {
        __extends(GameRunningState, _super);
        function GameRunningState() {
            _super.call(this);
        }
        GameRunningState.prototype.preload = function () {
            this.load.image('player', 'assets/img/player.png');
        };
        GameRunningState.prototype.create = function () {
            var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
            this.textValue = this.game.add.text(0, 0, "0", style);
            this.updateCount = 0;
            this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
            this.player.anchor.setTo(0.5, 0.5);
            this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        };
        GameRunningState.prototype.update = function () {
            this.textValue.text = (this.updateCount++).toString();
            if (this.upKey.isDown) {
                this.player.y -= 2;
            }
            else if (this.downKey.isDown) {
                this.player.y += 2;
            }
            if (this.leftKey.isDown) {
                this.player.x -= 2;
            }
            else if (this.rightKey.isDown) {
                this.player.x += 2;
            }
        };
        GameRunningState.prototype.render = function () {
            this.game.debug.text("This is drawn in render()", 0, 80);
        };
        return GameRunningState;
    })(Phaser.State);
    UtopicM.GameRunningState = GameRunningState;
    var SimpleGame = (function () {
        function SimpleGame() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
            this.game.state.add("GameRunningState", GameRunningState, false);
            this.game.state.add("TitleScreenState", TitleScreenState, false);
            this.game.state.start("TitleScreenState", true, true);
        }
        return SimpleGame;
    })();
    UtopicM.SimpleGame = SimpleGame;
})(UtopicM || (UtopicM = {}));
window.onload = function () {
    var game = new UtopicM.SimpleGame();
};
