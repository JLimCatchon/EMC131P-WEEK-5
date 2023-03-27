class menuScene extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){
        //add credits image
        //add exit button
        this.load.image('play','assets/misc/test.png');
        this.load.image('creditsButton','assets/misc/testCredit.png');
    }

    create(){
        const playButton = this.add.image(250,300,'play');
        playButton.setInteractive();
        playButton.on('pointerdown', () => {this.scene.start('level1')});
        const creditButton = this.add.image(300,450,'creditsButton');
        creditButton.setInteractive();
        creditButton.on('pointerdown', () => {this.scene.start('credits')});

    }

    update(){

    }
}