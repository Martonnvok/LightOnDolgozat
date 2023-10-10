class GombElem {
    #szuloElem
    #gombElem
    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        this.#gombMegjelenit();

        this.#gombElem = this.#szuloElem.children("button");
        this.#gombElem.on("click", () => {
            this.#kattintasTrigger("ujraIndit");
        });
    }

    #gombMegjelenit() {
        let txt = `<button class="ujraIndit">Restart</button>`;
        this.#szuloElem.append(txt);
    }
    #kattintasTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev);
        window.dispatchEvent(E);
    }

}

export default GombElem