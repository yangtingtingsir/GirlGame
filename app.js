var pageNo = 0;
var firstTime = true;
var isMuted = false;
var loadFinish = false;
var settingClicked = false;
var music, bMusicConfig, eventSound;
var i = 0;
var level = 1;
var thumbCount = 0;
var loadAssetValue = 0;
var loadAssetValue1 = 0;
var initialButtonTweenDelay = 2000;
var repeatButtonTweenDelay = 8000;
var uiButtonTimedEvent;
var startGame = false;
var levelSelectEnter = false;
var levelSelectFinish = false;
var level1Finish = false;
var level2Finish = false;
var level3Finish = false;
var thumbFinish = false;
var endScreenFinish = false;
var levelScaleCount = 0;
var endTimeInterval;
var adViewCount = 0;
var adViewCount1 = 0;
var adViewCount2 = 0;
var adViewCount3 = 0;
var panelNum = 0;
var safeArea;
const DEFAULT_WIDTH = 1400
const DEFAULT_HEIGHT = 600
const SAFE_WIDTH = 800
const SAFE_HEIGHT = 600
var game;
var config = {
    type: Phaser.AUTO,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    backgroundColor: '#ffffff',
    parent: 'theGame',
    transparent: true,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [boot, preloader, titlescreen,  levelselect, level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12, level13, level14, level15, level16, thumb, endscreen, dollselect],
	plugins: {
        scene: [
          {
            key: 'SpinePlugin',
            plugin: window.SpinePlugin,
            sceneKey: 'spine'
          }
        ]
    }
}
class Game extends Phaser.Game {
    constructor(config) {
        super(config)
    }
}
window.addEventListener('load', () => {
    const div = document.getElementById('theGame')
    if (div) {
        div.style.overflow = 'hidden'
        game = new Game(config)
        const resize = () => {
            const w = window.innerWidth
            const h = window.innerHeight
            let width = 0
            let height = 0
            if (DEFAULT_HEIGHT / DEFAULT_WIDTH > h / w) {
                if (SAFE_HEIGHT / DEFAULT_WIDTH > h / w) {
                    height = (h * DEFAULT_HEIGHT) / SAFE_HEIGHT
                    width = (height * DEFAULT_WIDTH) / DEFAULT_HEIGHT
                } else {
                    width = w
                    height = (width * DEFAULT_HEIGHT) / DEFAULT_WIDTH
                }
            } else {
                if (DEFAULT_HEIGHT / SAFE_WIDTH > h / w) {
                    height = h
                    width = (height * DEFAULT_WIDTH) / DEFAULT_HEIGHT
                } else {
                    width = (w * DEFAULT_WIDTH) / SAFE_WIDTH
                    height = (width * DEFAULT_HEIGHT) / DEFAULT_WIDTH
                }
            }
            game.canvas.style.width = width + 'px'
            game.canvas.style.height = height + 'px'
            game.scale.displaySize.setWidth(width)
            game.scale.displaySize.setHeight(height)
        }
        window.addEventListener('resize', resize)
        resize()
    } else {}
})