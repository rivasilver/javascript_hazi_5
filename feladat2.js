class Pont {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    setX(x){
        if (x < 0) {
            alert("Csak a számtengely jobb felső részében lévő pontokat tudjuk tárolni.")
        } else{
            this.#x = x;
        }
    }
    setY(y){
        if (y < 0) {
            alert("Csak a számtengely jobb felső részében lévő pontokat tudjuk tárolni.")
        } else {
            this.#y = y;
        }
    }
    toString(){
        return `Pont: x = ${this.#x}, y = ${this.#y}`;
    }
    static tavolsag(p1, p2){
        let x1 = p1.getX();
        let y1 = p1.getY();
        let y2 = p2.getY();
        let x2 = p2.getX();
        let x3 = abs(x1 - x2);
        let y3 = abs(y1 - y2);
        let kulonbseg = Math.sqrt((x3 ** 2) + (y3 ** 2));
        console.log(kulonbseg);
    }
}