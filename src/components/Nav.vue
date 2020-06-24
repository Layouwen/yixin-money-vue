<template>
  <div>
    <router-link to="/money">记账</router-link>
    <router-link to="/labels">标签</router-link>
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
  import x from '@/assets/icons/add.svg';

  console.log(x);
  export default {
    name: 'Nav.vue'
  };
</script>

<style lang="scss" scoped>
  div {
    border: 1px solid red;
  }
</style>