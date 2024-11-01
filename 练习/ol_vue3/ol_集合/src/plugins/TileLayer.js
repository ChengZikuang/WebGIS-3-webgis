import TileLayer from "ol/layer/Tile";
import { XYZ} from "ol/source";


const vector_tileLayer = new TileLayer({
  title: "vector_tile",
  source: new XYZ({
    url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
    wrapX: false,
  }),
});
const image_tileLayer = new TileLayer({
  title: "image_tile",
  source: new XYZ({
    url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=6&x={x}&y={y}&z={z}",
    wrapX: false,
  }),
  visible: false,
});
const ToggleTileLayer=() => {
  if (image_tileLayer.getVisible()=== false) {
    image_tileLayer.setVisible(true);
    vector_tileLayer.setVisible(false)
  } else {
    image_tileLayer.setVisible(false);
    vector_tileLayer.setVisible(true)
  }
}

export { vector_tileLayer, image_tileLayer,ToggleTileLayer };
