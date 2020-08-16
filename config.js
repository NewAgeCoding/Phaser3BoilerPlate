var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 200 }
        }
    },
    scene:[Lvl1]
};

new Phaser.Game(config);