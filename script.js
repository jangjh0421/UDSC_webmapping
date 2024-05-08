const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json', // style URL
    center: [-79.3839347, 43.6534817], // starting position [lng, lat]
    zoom: 14 // starting zoom
});

//----------------------------------------
const home = [ -79.3835,43.6640];
const stmicheal = [ -79.39044838198006, 43.66561845];
const fgmn = [ -79.4197798, 43.6464282];
const pho = [ -79.4191548, 43.6454805];
const goback = [-79.392316, 43.665105];
const terroni = [-79.4091549, 43.6462666];
const niagara = [-79.065001, 43.111620];
const cn = [-79.38708718320467, 43.6425637];
const aqua = [-79.3861266102009, 43.64248355];
const rec = [-79.386026, 43.641070];
const harb = [-79.3823108504931, 43.63874069385611];
const zandi = [-79.395029, 43.661685];

//----------------------------------------

const popup = new maplibregl.Popup({offset: 25}).setText(
    '재형이 사는 곳'
);
const stmicheal_popup = new maplibregl.Popup({offset: 25}).setText(
    '서인이 1학년 때 살던 기숙사'
);
const fgmn_popup = new maplibregl.Popup({offset: 25}).setText(
    '오싱턴에 있는 Forget Me Not 카페, 예전에 고구마 라떼랑 미숫가루가 맛있었는데'
);
const pho_popup = new maplibregl.Popup({offset: 25}).setText(
    '오싱턴에 있는 세상에서 가장 맛있는 쌀국수를 파는 곳'
);
const goback_popup = new maplibregl.Popup({offset: 25}).setText(
    '장재형이 고백했던 곳'
);
const terroni_popup = new maplibregl.Popup({offset: 25}).setText(
    '세상에서 제일 맛있는 마르게리따 피자를 먹은 곳'
);
const niagara_popup = new maplibregl.Popup({offset: 25}).setText(
    '생각보다 막 그렇게 볼 게 많진 않던 나이아가라'
);
const cn_popup = new maplibregl.Popup({offset: 25}).setText(
    '개짱높고 어두워지니까 너무 예뻤던 씨엔타워'
);
const aqua_popup = new maplibregl.Popup({offset: 25}).setText(
    '솔직히 이때도 사귀는 걸로 쳐야함 큭큭'
);
const rec_popup = new maplibregl.Popup({offset: 25}).setText(
    '나쁘진 않았지만 딱히 또 갈 것 같지는 않은 뤸룸'
);
const harb_popup = new maplibregl.Popup({offset: 25}).setText(
    '인생 첫 비버테일도 먹고, 사귀기 전에 바헨 가는 길에 갑자기 우버 타고 갔기도 했고, 아직도 할 . 거없고 어디 갈까 하면 꼭 고려대상에 추가되는 하버프론트'
);
const zandi_popup = new maplibregl.Popup({offset: 25}).setText(
    '누워있으면 찌찌기모찌...가 아니라 쯔쯔가무시 걸릴 것 같아서 거부감이 있었지만? 이제 씨름도 하고 영상도 찍고 서인이가 나 업어주기도 하고 닭싸움도 하는 그런 잔디밭'
);

//----------------------------------------

const el = document.createElement('div');
el.id = 'marker';

const stmicheal_el = document.createElement('div');
stmicheal_el.id = 'marker2';

const fgmn_el = document.createElement('div');
fgmn_el.id = 'marker3';

const pho_el = document.createElement('div');
pho_el.id = 'marker4';

const goback_el = document.createElement('div');
goback_el.id = 'marker5';

const terroni_el = document.createElement('div');
terroni_el.id = 'marker6';

const niagara_el = document.createElement('div');
niagara_el.id = 'marker7';

const cn_el = document.createElement('div');
cn_el.id = 'marker8';

const aqua_el = document.createElement('div');
aqua_el.id = 'marker9';

const rec_el = document.createElement('div');
rec_el.id = 'marker10';

const harb_el = document.createElement('div');
harb_el.id = 'marker11';

const zandi_el = document.createElement('div');
zandi_el.id = 'marker12';

//----------------------------------------

map.on('load', () => {
    
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

//----------------------------------------    

    new maplibregl.Marker({element: el})
    .setLngLat(home)
    .setPopup(popup)
    .addTo(map);

    new maplibregl.Marker({element: stmicheal_el})
    .setLngLat(stmicheal)
    .setPopup(stmicheal_popup)
    .addTo(map);

    new maplibregl.Marker({element: fgmn_el})
    .setLngLat(fgmn)
    .setPopup(fgmn_popup)
    .addTo(map);

    new maplibregl.Marker({element: pho_el})
    .setLngLat(pho)
    .setPopup(pho_popup)
    .addTo(map);

    new maplibregl.Marker({element: goback_el})
    .setLngLat(goback)
    .setPopup(goback_popup)
    .addTo(map);

    new maplibregl.Marker({element: terroni_el})
    .setLngLat(terroni)
    .setPopup(terroni_popup)
    .addTo(map);

    new maplibregl.Marker({element: niagara_el})
    .setLngLat(niagara)
    .setPopup(niagara_popup)
    .addTo(map);

    new maplibregl.Marker({element: cn_el})
    .setLngLat(cn)
    .setPopup(cn_popup)
    .addTo(map);

    new maplibregl.Marker({element: aqua_el})
    .setLngLat(aqua)
    .setPopup(aqua_popup)
    .addTo(map);

    new maplibregl.Marker({element: rec_el})
    .setLngLat(rec)
    .setPopup(rec_popup)
    .addTo(map);

    new maplibregl.Marker({element: harb_el})
    .setLngLat(harb)
    .setPopup(harb_popup)
    .addTo(map);
    
    new maplibregl.Marker({element: zandi_el})
    .setLngLat(zandi)
    .setPopup(zandi_popup)
    .addTo(map);
    //----------------------------------------
});

