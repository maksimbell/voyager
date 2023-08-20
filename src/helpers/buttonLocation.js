import L from 'leaflet'
import {
    MIN_RADIUS,
    RADIUS_DIF
} from 'Constants'

export function createButton(map, setPosition) {
    const radius = MIN_RADIUS + RADIUS_DIF

    L.easyButton("fa-map-marker", () => {
        map.locate().on('locationfound', function (e) {
            const pos = e.latlng
            setPosition(pos);
            const circle = L.circle(pos, radius, {
                fillOpacity: 0.1,
                opacity: 0.5
            })
            map.flyTo(pos, map.getZoom());
            circle.addTo(map)

        });
    }).setPosition('topleft').addTo(map)
}