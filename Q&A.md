## 待办

- [ ] 阿里前端开发规范
- [ ] TS+React
- [ ] vue复习
- [ ] 课件阅读
- [ ] 各官网文档通读（MDN\Vue\Route\Pinia\TS\React\ol\leaflet\mapbox\cesium）

## 0717

### 复习

```html
map = new ol.Map({

​	target:"",

​	layers:[],

​	view:new ol.View({

​		center,zoom,projection:""

​	})

})

layer:source,zIndex,title,opacity,visible
```



- [ ] 地理坐标-->投影坐标

## 0718

- [ ] .env 环境变量 Vue.prototype 全局变量？  

- [ ] vue3设置全局变量？

- [ ] geojson转化为ol要素

  const features =  new ol.format.GeoJSON().readFeatures(geojson)

- [ ] style 设置在layer中？

- [ ] $ajax() ,jquery.js?

- [ ] es6 == ===?

- [ ] npm bulid npm preview!

- [ ] hook理解？

- [x] 全局事件的监听，解绑操作！

### 复习

矢量图层标记及GeoJSON

## 0719

实现vue3+ol

业务流程：

导入ol,查看api或example

feature-source-layer-map

app.vue实现 

1.高德地图加载

2.控件实现

3.GeoJSON图层加载