import {
    placesApiUrl
} from 'Constants'

export function requestPlaces(params) {
    const {
        latlng,
        radius
    } = params

    return fetch(placesApiUrl +
        '?categories=commercial,commercial.supermarket' +
        '&filter=circle:27.652933364909813,53.907640406505436,5000' +
        '&bias=proximity:27.652933364909813,53.907640406505436' +
        '&limit=20' +
        `&apiKey=${process.env.REACT_APP_PLACES_API_KEY}`)
}