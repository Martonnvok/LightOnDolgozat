import LampakModell from "../modell/LampakModell.js";
import Lampak from "../view/Lampak.js";
import GombElem from "../view/GombElem.js";

class Controller {

    constructor() {
        const GOMB = new GombElem($(".restart"));
        const LAMPAKMODELL = new LampakModell();
        const LAMPAK = new Lampak($(".lighton"), LAMPAKMODELL.getList());
        $(window).on("szintValt", (event) => {
            LAMPAKMODELL.setAllapot(event.detail.index);
            $(".lighton").empty();
            LAMPAKMODELL.szomszedokKeresese(event.detail.index);
            new Lampak($(".lighton"), LAMPAKMODELL.getList());
            
            
        });
    }



}

export default Controller;