import L from 'leaflet'

export function createSidebar(map) {
    var sidebar = L.control.sidebar('sidebar', {
        closeButton: true,
        position: 'left'
    });
    map.addControl(sidebar);

    setTimeout(function () {
        sidebar.toggle();
    }, 1000);
}