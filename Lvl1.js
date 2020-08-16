class Lvl1 extends Phaser.Scene {
    constructor(){
        super("lvl1")
    }

    // Preload assests
    preload(){

    }

    // Create
    create(){
        this.add.text(50, 100, "Hello NewAgeCoding!", {color: "yellow", fontSize:"40px"})
    }

    // Update loop
    update(){

    }

}