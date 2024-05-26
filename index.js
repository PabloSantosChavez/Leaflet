import { lugares } from '../config/lugares.js';
import Marcador from '../js/Marcador.js';
import Poligono from '../js/Poligono.js';


const map = L.map('map').setView([-36.822428, -73.014926], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Iconos
const iconos = {
    default: L.icon({ iconUrl: './assets/icons/FoodAndMILK.webp', iconSize: [32, 32], iconAnchor: [32, 32] }),
    'Fina Estampa': L.icon({ iconUrl: './assets/icons/Auctioneers.webp', iconSize: [32, 32], iconAnchor: [32, 32] }),
    'Camino del agua': L.icon({ iconUrl: './assets/icons/Inkeepers.webp', iconSize: [32, 32], iconAnchor: [32, 32] }),
    // Añadir otros iconos específicos según sea necesario
};

const marcador = new Marcador(map, lugares, iconos);
marcador.crearMarcadores();

const poligono = new Poligono(map);
poligono.crearPoligonos();
