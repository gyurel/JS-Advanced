class Ractangle {
    // width;
    // height;
    // color;

    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return Number(this.height) * Number(this.width);
    }
}
