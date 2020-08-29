// Prueba, dibujar puntos

// función constante para generar un número aleatorio (alias)
const getRandomNumber = function () {
    return Math.random();
}

// se crea una lista con los diferentes puntos a dibujar sobre el mapa
const features = [];

// trecientos puntos se van a agregar a la lista
for (i = 0; i < 300; i++) {

    // cada punto varía en un poco la cordenada manteniendose
    // en uno de los cuadrantes con centro en -85,9
    features.push(new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([
	    -85.0 + getRandomNumber(), 9.0 + getRandomNumber()
	]))
    }));
}

// se crean los objetos vectores que serán al final de cuentas
// lo que se dibuja sobre el objeto mapa
const vectorSource = new ol.source.Vector({
    features
});

const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
	image: new ol.style.Circle({
	    radius: 5,
	    fill: new ol.style.Fill({color: 'red'})
	})
    })
});

// fin de la prueba de puntos aleatorios, ahora se procede con el mapa

// se crea un view que es el objeto que especifica la pocisión del
// mapa y su área así como el zoom y la delimitación
var view = new ol.View({
    center: ol.proj.fromLonLat([-84.1027104, 9.865107]),
    zoom: 12,
    // [minx,miny,max,may]
    extent: [-9375050.54, 1092000.79, -9352512.37, 1113049.659],
});

// ahora se crea el mapa que requiere de un conjunto de capas,
// en este caso se tiene toda la construcción de rutas y edificios
// por defecto junto con el vector de puntos

// target indica la sección del html que contendrá el
// mapa, es decir el canvas
var map = new ol.Map({
    layers: [
	new ol.layer.Tile({
	    source: new ol.source.OSM(),
	}),
	vectorLayer,
    ],
    keyboardEventTarget: document,
    target: 'map',
    view: view,
});
