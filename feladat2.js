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
}