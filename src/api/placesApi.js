import {
    PLACES_API_URL
} from 'Constants'

export function requestPlaces(categories, latlng, radius) {

    return fetch(PLACES_API_URL +
        `?categories=${categories.join(',')}` +
        `&filter=circle:${latlng.lng},${latlng.lat},${radius}` +
        `&limit=100` +
        `&apiKey=${process.env.REACT_APP_PLACES_API_KEY}`)
}