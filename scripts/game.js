var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [menuScene,level1,creditScene,gameOverScene]
};
var game = new Phaser.Game(config);

function collectStar (player, star)
{
    star.disableBody(true, true);
    score += 10;
    boxCollected += 1;
    scoreText.setText('Score: ' + score);
    boxScoreText.setText('Box Collected: ' + boxCollected);

    if (boxCollected % 5 === 0) {
        player.setScale(player.scaleX + 0.1, player.scaleY + 0.1);
    }
    if (box.countActive(true) === 0)
    {
        box.children.iterate(function (child) {
            child.enableBody(true, Math.random() * game.config.width - 10, 0, true, true);
        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
}

function hitBomb (player, bomb){
    this.physics.pause();
    player.disableBody(true,true);
    this.scene.start('endScene',score, boxCollected);
    }

function playerColors(){
      player.setTint(colors[currentColorIndex]);
      currentColorIndex = (currentColorIndex + 1) % colors.length;
}
