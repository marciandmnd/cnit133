  function initMap() {

    const locations = [
      { title: "Mecca", lat: 21.4225, lng: 39.8262 },
      { title: "Medina", lat: 24.5247, lng: 39.5692 },
      { title: "Jerusalem", lat: 31.7683, lng: 35.2137 },
    ];

    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker",
      );

      // Center the map at a suitable location (e.g., between the three cities)
      const map = new Map(document.getElementById("map"), {
        center: { lat: 26.5, lng: 37.5 },
        zoom: 5,
        mapId: "DEMO_MAP_ID", // A map ID is required for advanced markers
      });

      // Add markers for all locations
      locations.forEach((location) => {
        new AdvancedMarkerElement({
          map: map,
          position: { lat: location.lat, lng: location.lng },
          title: location.title,
        });
      });
    }

    initMap();
  }