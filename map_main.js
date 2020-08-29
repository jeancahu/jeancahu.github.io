
// Prueba, dibujar puntos
// generate 300 random points features
const getRandomNumber = function () {
    return Math.random();
}

console.log(getRandomNumber());

const features = [];
for (i = 0; i < 300; i++) {
    features.push(new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.fromLonLat([
	    -85.0 + getRandomNumber(), 9.0 + getRandomNumber()
	]))
    }));
}

// create the source and layer for random features
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

// Fin de la prueba

var view = new ol.View({
    center: ol.proj.fromLonLat([-84.1027104, 9.865107]),
    zoom: 12,
    // [minx,miny,max,may]
    extent: [-9375050.54, 1092000.79, -9352512.37, 1113049.659],
});

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
