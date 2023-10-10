class LampakModell {
    #list = [];
    constructor() {
        for (let index = 0; index < 9; index++) {
            let szam = Math.floor(Math.random() * 2);
            this.#list[index] = szam;
        }
    }

    getList() {
        return this.#list;
    }

    getListI(index) {
        return this.#list[index];
    }

    setAllapot(index) {
        if (this.#list[index] == 1) {
            this.#list[index] = 0;
        } else {
            this.#list[index] = 1;
        }
    }

}

export default LampakModell;