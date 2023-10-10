class LampaElem {
    #szuloElem;
    index;
    allapot;
    #divElem;
    constructor(szuloElem, allapot, index) {
        this.#szuloElem = szuloElem;
        this.allapot = allapot;
        this.index = index;
        this.#megjelenitLampa();
        


        this.#divElem = this.#szuloElem.children("div:last-child");
        this.#divElem.on("click", () => {
            this.#kattintasTrigger("szintValt");
        });

        
    }

    #megjelenitLampa() {
        let txt =  `<div id=${this.index} class="elemek" style="${this.#szinBeallit(this.allapot)}"> </div>`;
        this.#szuloElem.append(txt);
    }

    #szinBeallit() {
        if (this.allapot == 1) {
            return "background:white";
        } else {
            return "background:yellow";
        }
    }

    #kattintasTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev, { detail: this });
        window.dispatchEvent(E);
    }

}

export default LampaElem;