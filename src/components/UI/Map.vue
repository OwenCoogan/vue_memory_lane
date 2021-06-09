<template>
  <div class="w-2/3" id="mapContainer">
  
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from 'axios'
export default {
  name: "LeafletMap",
  data() {
    return {
        map: null,
        posts: [],
    };
  },
  created() {
  },
 methods:{
    async fetchData () {
        const res = await axios.get('http://localhost:6590/api/posts', {
        })
        this.posts = res.data
        
  },
 },
  
  mounted() {
    this.fetchData()
    this.$getLocation()
    .then(coordinates => {
    localStorage.setItem('coordinates', JSON.stringify(coordinates));

    this.map = L.map("mapContainer").setView([coordinates.lat,coordinates.lng], 200);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    }).addTo(this.map);

  this.currentMarker = L.circle([coordinates.lat,coordinates.lng],{radius: 5}).addTo(this.map);
  /*this.posts.forEach(function(post){
    console.log(post)
   this.marker.id =  L.icon([post.gpsPositionLat,post.gpsPositionLong],{radius: 5}).addTo(this.map);
    
  }); */

    setInterval(function() {
      localStorage.setItem('coordinates', JSON.stringify(coordinates));
    }) 
    }, 60 * 1000);
    
  }
  
};
</script>