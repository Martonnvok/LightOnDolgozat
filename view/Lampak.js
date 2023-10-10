import LampaElem from "./LampaElem.js";
class Lampak {
    constructor(szuloElem, lista) {
        for (let index = 0; index < 9; index++) {
          new LampaElem(szuloElem, lista[index], index);
        }
      }
    
}

export default Lampak;