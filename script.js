const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json', // style URL
    center: [-79.3839347, 43.6534817], // starting position [lng, lat]
    zoom: 14 // starting zoom
});

const home = [ -79.3835,43.6640];
const popup = new maplibregl.Popup({offset: 25}).setText(
    'My Home!'
);

const myhal = [ -79.39697174862171, 43.66063572729519];
const popup2 = new maplibregl.Popup({offset: 25}).setText(
    'Myhal Center for Engineering Innovation & Entrepreneurship, where our UDSC workshop was in.'
);
// create DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';
// create DOM element for the marker
const el2 = document.createElement('div');
el2.id = 'marker2';

map.on('load', () => {
    map.addSource('route', {
        type: 'geojson', // Specify the type as 'geojson'
        data: {
            type: "FeatureCollection",
            features: [{
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates: [
                        [-79.39697174862171, 43.66063572729519],
                        [-79.3970872592493, 43.660931686640055],
                        [-79.39593696591591, 43.66115800750785],
                        [-79.39458085859478, 43.662515703537764],
                        [-79.39381804822614, 43.662717165494115],
                        [-79.39369696721519, 43.662866071722675],
                        [-79.39349112949635, 43.66305001420179],
                        [-79.39315210266572, 43.66312008737867],
                        [-79.38454296212711, 43.664896426687335],
                        [-79.38417871600087, 43.66399815140025],
                        [ -79.3835,43.6640]
                    ]
                }
            }, ]
        }
    });
    
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 4
        }
    });
    // create the marker
    new maplibregl.Marker({element: el})
    .setLngLat(home)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

    // create the marker
    new maplibregl.Marker({element: el2})
    .setLngLat(myhal)
    .setPopup(popup2) // sets a popup on this marker
    .addTo(map);
});

