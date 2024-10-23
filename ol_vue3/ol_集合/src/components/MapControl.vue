<template>
  <div>
    <div id="mouse-position"></div>
  </div>
</template>

<script setup>
import MousePosition from "ol/control/MousePosition.js";
import { createStringXY } from "ol/coordinate.js";

import { getCurrentInstance, onMounted } from "vue";
const mouse = new MousePosition({
  target: document.getElementById("mouse-position"),
  coordinateFormat: createStringXY(4),
  projection: "EPSG:4326",
  className: "custom-mouse-position",
});

onMounted(() => {
  //   console.log("onMonuted in MapControl.vue");
  const { proxy } = getCurrentInstance();
  const map = proxy.$map;

  map.addControl(mouse);
});
</script>

<style>
.custom-mouse-position {
  position: fixed;
  bottom: 0px;
  z-index: 100;
  width: 200px;
  height: 40px;
  /* background-color: #652e8080; */
  text-align: center;
  line-height: 40px;
  color: #000000;
  border-radius: 5px;
}
</style>
