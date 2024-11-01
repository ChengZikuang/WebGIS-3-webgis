<template>
  <div>
    <input type="text" v-model="keyword" @keydown.enter="handleEnter" />
    <h2>列表渲染</h2>
    <h4>正在进行中 {{ doingList.length }}</h4>
    <ul>
      <li v-for="item of doingList" :key="item.name">
        <input type="checkbox" v-model="item.checked" /> {{ item.name }}
        <button @click="delItem(item.name)">删除</button>
      </li>
    </ul>
    <h4>已完成 {{ completeList.length }}</h4>
    <ul>
      <li v-for="item of completeList" :key="item.name">
        <input type="checkbox" v-model="item.checked" /> {{ item.name }}
        <button @click="delItem(item.name)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";

const keyword = ref("");
const lists = ref([]);
/* {name:"Vue",checked:false} */
/* 1、获取input的值 */
const handleEnter = () => {
  /* 2、设置值到lists  if */
  let res = lists.value.find((item) => item.name == keyword.value);
  if (res) {
    alert("值重复");
  } else {
    lists.value.push({
      name: keyword.value,
      checked: false,
    });
  }
  keyword.value = "";
};
const doingList = computed(() => {
  return lists.value.filter((item) => !item.checked);
});
const completeList = computed(() => {
  return lists.value.filter((item) => item.checked);
});
/* 缓存 */
watch(
  lists,
  (val) => {
    console.log(val);
    /* 存储值到缓存 */
    localStorage.setItem("localLists", JSON.stringify(val));
  },
  {
    deep: true,
  }
);
onMounted(() => {
  let result = localStorage.getItem("localLists"); //string
  if (result) {
    lists.value = JSON.parse(result);
  }
});
/* 实现删除 */
const delItem = (name) => {
  lists.value = lists.value.filter((item) => item.name != name);
};
</script>

<style scoped></style>
