// import { getCurrentInstance, onMounted } from "vue";
import GeoJSON from "ol/format/GeoJSON.js";
import { getCityBound } from "../plugins/axios.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import Style from "ol/style/Style.js";
import Fill from "ol/style/Fill.js";
import Stroke from "ol/style/Stroke.js";

// const { proxy } = getCurrentInstance();
// const map = proxy.$map;
//citybound geojson加载
let res = await getCityBound();
const features = new GeoJSON().readFeatures(res);
export const cityboundlayer = new VectorLayer({
  source: new VectorSource({
    features,
  }),
  style: new Style({
    fill: new Fill({
      color: "rgba(0, 0, 255, 0)",
    }),
    stroke: new Stroke({
      color: "#ff4e00",
      width: 3,
    }),
  }),
});
//   map.addLayer(citybound)
