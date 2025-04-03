import Tienda from './Tienda.js';
import Cliente from './Cliente.js';

const tienda = new Tienda();

// Clientes (cada uno con distintos productos)
const cliente1 = new Cliente("Alex", tienda, ["playera", "telefono"]);
const cliente2 = new Cliente("Francisco", tienda, ["funda"]);
const cliente3 = new Cliente("Humberto", tienda, ["playera"]);

tienda.setStock(15, 10, 3); // set neuvo stock