<template>
  <div>
    <div class="drawtool">
        <button @click="DrawPiont()">绘制点</button>
        <button>清除所有</button>
    </div>
  </div>
</template>

<script setup>
const DrawPiont = () => {
    //1.鼠标变换样式,设置绘制点按钮不可选
    //2.鼠标移动,左键点击后,留下标记点(圆要素)
    //3.获取经纬度坐标,实现标记点转feature
    //4.实现点图层添加元素
}
</script>

<style scoped>
.drawtool{
    position: absolute;
    top:30px;
    right: 15px;
}
</style>
