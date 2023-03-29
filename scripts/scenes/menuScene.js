class menuScene extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){
        //add credits image
        //add exit button
        this.load.image('play','assets/misc/play.png');
        this.load.image('creditsButton','assets/misc/credits.png');
        this.load.image('menuBackground', 'assets/background/bg.png');

    }

    create(){
        this.add.image(400, 300, 'menuBackground');
        const playButton = this.add.image(400,300,'play').setScale(0.5);
        playButton.setInteractive();
        playButton.on('pointerdown', () => {this.scene.start('level1');
        score = 0;
        boxCollected = 0;});
        const creditButton = this.add.image(400,420,'creditsButton').setScale(0.5);
        creditButton.setInteractive();
        creditButton.on('pointerdown', () => {this.scene.start('credits')});

    }

    update(){

    }
}