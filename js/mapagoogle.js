
function initMap() {
    var myLatLng = { lat: -16.635940439365115, lng: -49.236344539171306 }; // Coordenadas para definir o centro do mapa

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13, // Nível de zoom inicial
        center: myLatLng // Coordenadas do centro do mapa
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Senac Sata Genoveva' // Título do marcador
    });
    
}
window.onload = function () {
    initMap();
};
