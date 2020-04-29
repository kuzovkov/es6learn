export default class Rect {

    constructor(x=5, y=10) {
        if (x !== undefined)
            this.x = x;
        if (y !== undefined)
            this.y = y;
    }

    print(){
        console.log('x=', this.x, 'y=', this.y);
    }

    square(){
        return this.x * this.y;
    }

    splitter(){
        console.log('/-----------------------------------------------------/');
    }
};
