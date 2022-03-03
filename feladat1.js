class szemely{
    #vezeteknev;
    #keresztnev;
    #eletkor;
    #hobby;
    constructor(vezeteknev, keresztnev, eletkor, hobby){
        this.#vezeteknev = vezeteknev;
        this.#keresztnev = keresztnev;
        this.#eletkor = eletkor;
        this.#hobby = hobby;
    }
    setHobby(hobby) {
        this.#hobby = hobby;
    }
    teljesnev(){
        return `${this.#vezeteknev} ${this.#keresztnev}`
    }
    eletkor(){
        return this.#eletkor
    }
    getHobby(){
        return this.#hobby
    }
}