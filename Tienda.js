import Subject from './Subject.js';  

class Tienda extends Subject {
    constructor() {
        super();
        this.stock = {
            playera: 0,
            funda: 0,
            telefono: 0
        };
    }

    setStock(playera, funda, telefono) {
        console.log(`Stock antes de actualizar --> Playeras: ${this.stock.playera}, Fundas: ${this.stock.funda}, Teléfonos: ${this.stock.telefono}`);
        console.log(`Stock actualizado --> Playeras: ${15}, Fundas: ${10}, Teléfonos: ${3}\n`);

        let cambios = {};

        if (playera !== this.stock.playera) cambios.playera = playera;
        if (funda !== this.stock.funda) cambios.funda = funda;
        if (telefono !== this.stock.telefono) cambios.telefono = telefono;

        this.stock = { playera, funda, telefono };

        if (Object.keys(cambios).length > 0) {
            this.notifyObservers(cambios);
        }
    }
}

export default Tienda;