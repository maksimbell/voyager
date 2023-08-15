import L from 'leaflet';
import img from 'Assets/person/image.png'
import shadow from 'Assets/person/shadow.png'

const iconPerson = new L.Icon({
    iconUrl: img,
    iconSize: [20, 20],
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: shadow,
    shadowSize: [40, 40],
    shadowAnchor: new L.Point(20, 20)
});

export {
    iconPerson
};