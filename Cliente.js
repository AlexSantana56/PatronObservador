import Observer from './Observer.js';

class Cliente extends Observer {
    constructor(nombre, tienda, productosInteres) {
        super();
        this.nombre = nombre;
        this.tienda = tienda;
        this.productosInteres = productosInteres; // Productos que le interesan al cliente
        tienda.registerObserver(this);
    }

    update(cambios) {
        let notificacion = false;
        let mensaje = `¡${this.nombre}, tus productos están disponibles!:\n`;

        for (const producto of this.productosInteres) {
            if (cambios.hasOwnProperty(producto)) {
                mensaje += `- ${producto}: ${cambios[producto]}\n`;
                notificacion = true;
            }
        }

        if (notificacion) {
            console.log(mensaje);
        }
    }
}

export default Cliente;