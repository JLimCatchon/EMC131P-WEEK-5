class creditScene extends Phaser.Scene{
    constructor(){
        super("credits");
        
    }
    preload(){
        //add return button to menuScene
        this.load.image('return','assets/misc/exitbutton.png');

        //exitbutton.png
    }
    create(){
        const returnButton = this.add.image(250,300,'return');
        returnButton.setInteractive();
        returnButton.on('pointerdown', () => {this.scene.start('menuScene')});
    }
    update(){

    }
}