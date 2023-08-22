import L from 'leaflet';
import img from 'Assets/person/image.png'
import shadow from 'Assets/person/shadow.png'
import {
    CATEGORY_MAP
} from 'Constants'

const CustomIcon = L.Icon.extend({
    options: {
        iconAnchor: null,
        popupAnchor: null,
        shadowSize: [40, 40],
        shadowAnchor: new L.Point(20, 20)
    }
});

class IconFactory {
    create(type) {
        if (CATEGORY_MAP[type])
            return new CustomIcon({
                iconUrl: CATEGORY_MAP[type],
                iconSize: [40, 40],
            })

        return new CustomIcon({
            iconUrl: img,
            shadowUrl: shadow,
            iconSize: [20, 20],
        })
    }
}

export default new IconFactory()