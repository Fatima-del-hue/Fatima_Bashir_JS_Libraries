document.addEventListener("DOMContentLoaded", function () {
    
    // Initialize AOS Library
    AOS.init();
    
    // glide library
    new Glide('.glide', {
        // Options are 'carousel' or 'slider'- this selected carousel
        type: 'carousel',  
        // Start at first slide (index 0)
        startAt: 0,        
        perView: 1,       
        // Auto-slide every 3 seconds
        autoplay: 3000,    
        // Pause on hover
        hoverpause: true   
    }).mount();



    // Leaflet Map library
    var map = L.map('map').setView([51.505, -0.09], 13); 
    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    // a marker to the specified coordinates on the map
    L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('Your next destination?').openPopup();


    // Lightbox library
    // Wait for jQuery before initializing Lightbox2
    $(document).ready(function() {
        // DOM is fully loaded before executing the script
        if (typeof lightbox !== "undefined") {
            // Check if the Lightbox2 library is properly loaded.
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                // Hide the image counter
                'showImageNumberLabel': false
            });
            // Log success message to console.
            console.log("Lightbox2 initialized successfully.");
        } else {
            console.error("Lightbox2 is not loaded. Check if the script is included correctly.");
            // Log an error if Lightbox2 is not detected.
        }
    });


});
