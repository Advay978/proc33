class Snow{
    constructor(){
        this.snow = createSprite(Math.random()*700,0,10,10);
        this.snow.addImage(snow);
        this.snow.scale = 0.05;
        this.snow.velocityY = 1
    }
}