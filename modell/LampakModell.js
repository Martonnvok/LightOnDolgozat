class LampakModell {
    #list = [];
    constructor() {
        this.feltoltLista();
    }

    feltoltLista() {
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

    szomszedokKeresese(id) {
        const szomszedFelsoSor = id > 5 ? id : id + 3;
        const szomszedAlsoSor = id < 3 ? id : id - 3;;
        const szomszedBal = id % 3 == 0 ? id : id - 1;;
        const szomszedJobb = id % 3 == 2 ? id : id + 1;
        const szomszedek = [szomszedFelsoSor, szomszedAlsoSor, szomszedBal, szomszedJobb, id];
        console.log(szomszedek)
        for (const szomszed of szomszedek) {
            if (szomszed !== null) {
                if (this.#list[szomszed] === 1) {
                    this.#list[szomszed] = 0;
                } else {
                    this.#list[szomszed] = 1;
                }
            }
        }

    }
}

export default LampakModell;