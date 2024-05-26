class Marcador {
    constructor(map, lugares, iconos) {
        this.map = map;
        this.lugares = lugares;
        this.iconos = iconos;
    }

    crearMarcadores() {
        this.lugares.forEach(lugar => {
            const icon = this.iconos[lugar.nombre] || this.iconos.default;
            L.marker(lugar.coordenadas, {icon}).addTo(this.map)
                .bindPopup(lugar.nombre);
        });
    }
}

export default Marcador;
