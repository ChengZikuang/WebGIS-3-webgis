<template>
  <div>
    <input type="text" v-model="input" @keydown.enter="handleEnter" />
    <h3>列表渲染</h3>
    <h4>未完成 {{ uncheckedlist.length }}</h4>
    <ul>
      <li v-for="(item, index) of uncheckedlist" :key="item.name">
        <input type="checkbox" v-model="item.checked" />{{ item.name }}
        <button @click="delItem(item.name)">delete</button>
      </li>
    </ul>
    <h4>已完成{{ checkedlist.length }}</h4>
    <ul>
      <li v-for="(item, index) of checkedlist" :key="item.name">
        <input type="checkbox" v-model="item.checked" />{{ item.name }}
        <button @click="delItem(item.name)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";

const input = ref("");
/*[{name:text , checked}]*/
const list = ref([]);
const delItem = (name) => {
  list.value = list.value.filter((item) => item.name != name);
};
const handleEnter = () => {
  let res = list.value.find((item) => item.name === input.value);
  if (!input.value) {
    alert("请输入有效值");
  } else if (res) {
    alert("请勿重复输入");
  } else {
    list.value.push({
      name: input.value,
      checked: false,
    });
  }
  input.value = "";
};
watch(
  list,
  (val) => {
    localStorage.setItem("locallist", JSON.stringify(val));
  },
  { deep: true }
);

const checkedlist = computed(() => {
  return list.value.filter((item) => item.checked === true);
});
const uncheckedlist = computed(() => {
  return list.value.filter((item) => item.checked === false);
});

onMounted(() => {
  let result = localStorage.getItem("locallist"); //string
  if (result) {
    list.value = JSON.parse(result);
  }
});
</script>

<style lang="scss" scoped></style>
