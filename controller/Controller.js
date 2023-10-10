import LampakModell from "../modell/LampakModell.js";
import Lampak from "../view/Lampak.js";

class Controller {

    constructor() {
        const LAMPAKMODELL = new LampakModell();
        const LAMPAK = new Lampak($(".lighton"), LAMPAKMODELL.getList());
        $(window).on("szintValt", (event) => {
            LAMPAKMODELL.setAllapot(event.detail.index);
            $(".lighton").empty();
            new Lampak($(".lighton"), LAMPAKMODELL.getList());
        });
    }



}

export default Controller;