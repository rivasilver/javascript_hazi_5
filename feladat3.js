class Etel{
    #nev;
    #ar;
    #kategoria;
    #osszetevok;
    constructor(nev, ar, kategoria, osszetevok){
        this.#nev = nev;
        this.#ar = ar;
        this.#kategoria = kategoria;
        this.#osszetevok = osszetevok;
    }
    tablazatSor(){
        return `<tr><td>${this.#nev}</td><td>${this.#ar}</td><td>${this.#kategoria}</td><td>${this.#osszetevok}</td></tr>`;
    }
}