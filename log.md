## 待办

- [ ] 阿里前端开发规范
- [ ] TS+React
- [ ] vue复习
- [ ] 课件阅读
- [ ] 各官网文档通读（MDN\Vue\Route\Pinia\TS\React\ol\leaflet\mapbox\cesium）
- [ ] 前端书籍（JS）

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

- [x] 1.高德地图加载

- [x] 2.控件实现

- [x] 3.GeoJSON图层加载

## 0722

vue3 中导出app,没有方法直接在子组件中获取app吗？

异步组件？

keep-alive包裹组件

深结构层级的解构？

e.cordinates?如果不是在map中，e.coordinates是屏幕像素点位置吗？

```vue
//canvas：
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
const style = new ol.style.Style({
        image: new ol.style.Icon({
            img: canvas,
            imgSize: [canvas.width, canvas.height]
        })
    })

```



待办：

- [ ] 测试 keep-alive、异步组件、父子组件生命周期和路由跳转生命周期
- [x] ol vue3 prototype
- [ ] feature绘制
- [ ] draw绘制
- [ ] popup弹窗
- [ ] 悬浮显示作业

0723

geojson 应该是vue文件还是js文件？