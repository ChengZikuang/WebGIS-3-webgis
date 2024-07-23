<template>
  <div id="map"></div>
  <button class="toolbar" @click="ToggleTileLayer()">卫星</button>
</template>

<script setup>
import { inject, onMounted } from 'vue';
import { vector_tileLayer,image_tileLayer,ToggleTileLayer } from '../plugins/TileLayer.js';
// import {cityboundlayer } from '../plugins/geojson.js'
import { Map, View } from 'ol';
const app = inject('app')


onMounted(() => {
  // console.log("onMonuted in OlMap.vue");
  const map = new Map({
  target:"map",
  // layers:[image_tileLayer,vector_tileLayer,cityboundlayer],
  layers:[image_tileLayer,vector_tileLayer],
  view:new View({
    center:[118.77,32.06],
    zoom:14,
    projection: "EPSG:4326",
  }),
})
app.config.globalProperties.$map = map;
})

</script>

<style scoped>
</style>
<style lang="scss">
#map{
  height: 100vh;
  width: 100vw;
}

.toolbar{
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  
}
</style>
