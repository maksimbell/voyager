import nature from 'Assets/categories/nature.png'
import religion from 'Assets/categories/religion.png'
import entertainment from 'Assets/categories/entertainment.png'
import sport from 'Assets/categories/sport.png'
import adult from 'Assets/categories/adult.png'
import culture from 'Assets/categories/culture.png'
import accommodation from 'Assets/categories/accommodation.png'
import history from 'Assets/categories/history.png'
import carRental from 'Assets/categories/rental-car.png'
import bicycleRental from 'Assets/categories/rental-bicycle.png'
import industrial from 'Assets/categories/industrial.png'
import gasStation from 'Assets/categories/gas-station.png'

import searchIcon from 'Assets/sidebar/search.png';
import favoriteIcon from 'Assets/sidebar/favorite.png';
import logoIcon from 'Assets/logo.png';


// export const CATEGORIES = ['natural', 'religion', 'entertainment',
//     'sport', 'adult', 'accommodation', 'entertainment.culture', 'building.historic', 'building.service',
//     'building.industrial', 'rental.car', 'rental.bicycle', 'commercial.gas', 'commercial'
// ]
export const PLACES_API_URL = 'https://api.geoapify.com/v2/places'
export const MIN_RADIUS = 5000
export const RADIUS_DIF = 500
export const MAP_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
export const MAP_CENTER = [53.837824, 27.6430848]
export const MAP_ZOOM = 16
export const LOGO_ICON = logoIcon

export const SIDEBAR_SECTIONS_MAP = {
    'search': searchIcon,
    'favorite': favoriteIcon,
}

export const CATEGORY_MAP = {
    'natural': nature,
    'religion': religion,
    'entertainment': entertainment,
    'sport': sport,
    'adult': adult,
    'accommodation': accommodation,
    'entertainment.culture': culture,
    'building.historic': history,
    'building.industrial': industrial,
    'rental.car': carRental,
    'rental.bicycle': bicycleRental,
    'commercial.gas': gasStation,
    // ['building.service'],
    // ['commercial']
}