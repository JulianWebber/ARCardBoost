// Wait for the A-Frame scene to load
AFRAME.registerComponent('ar-scene-loaded', {
    init: function () {
        console.log('AR scene loaded');
        
        // Initialize the business card when the QR code is found
        const marker = document.querySelector('a-marker');
        marker.addEventListener('markerFound', function() {
            console.log('QR code found');
            initBusinessCard();
        });
    }
});

document.querySelector('a-scene').setAttribute('ar-scene-loaded', '');
