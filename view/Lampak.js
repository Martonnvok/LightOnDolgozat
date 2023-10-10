import LampaElem from "./LampaElem.js";
class Lampak {
    constructor(szuloElem, lista) {
        let n = 3;
        let hossz = n * n;
        for (let index = 0; index < hossz; index++) {
            new LampaElem(szuloElem, lista[index], index);
        }
    }


   
}

export default Lampak;