class gameOverScene extends Phaser.Scene{
    constructor(){
        super("endScene");

    }
    preload(){
        //add restart button
        //add exit button.
        this.load.image('reset','assets/misc/reset.png');
        this.load.image('return','assets/misc/exitbutton.png');
    }
    create() {
        const playerScore = score;
        const playerBoxCollected = boxCollected;

        const gameOverText = this.add.text(400, 200, 'Game Over!\nScore:'+ playerScore + '\nBox Collected:' + playerBoxCollected, {
            fontFamily: 'Arial',
            fontSize: '32px',
            fill: '#fff'
        });
        gameOverText.setOrigin(0.5);

        const resetButton = this.add.image(250,400,'reset').setScale(.2);
        resetButton.setInteractive();
        resetButton.on('pointerdown', () => {this.scene.start('level1')});
        
        const returnMainMenu = this.add.image(400,400,'return').setScale(.2);
        returnMainMenu.setInteractive();
        returnMainMenu.on('pointerdown', () => {this.scene.start('menuScene')});
    }
    update(){
        
    }
}
