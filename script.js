window.addEventListener('DOMContentLoaded', function () {
    var modelEntity = document.querySelector('#model-entity');
    function markerFound(markerId) {
        console.log('Marker found:', markerId);
        modelEntity.setAttribute('visible', true);
    }

    function markerLost(markerId) {
        console.log('Marker lost:', markerId);
        modelEntity.setAttribute('visible', false);
    }

    AR.markerFound(markerFound);
    AR.markerLost(markerLost);
});
//