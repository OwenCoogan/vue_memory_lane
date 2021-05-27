<template>
  <div class="w-2/3" id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "LeafletMap",
  data() {
    return {
        map: null,
    };
  },
  created() {
  },
  
  mounted() {
    this.$getLocation()
    .then(coordinates => {
    this.map = L.map("mapContainer").setView([coordinates.lat,coordinates.lng], 200);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    }).addTo(this.map);
  });
    
  }
};
</script>

<style scoped>
#mapContainer {
  width: 100vw;
  height: 100vh;
}
</style>