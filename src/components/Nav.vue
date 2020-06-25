<template>
  <div>
    <router-link to="/labels">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/money">
      <Icon name="add"/>
      记账
    </router-link>
    <router-link to="/statistics">
      <Icon name="statistics"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav.vue',
  };
</script>

<style lang="scss" scoped>
  div {
    border: 1px solid red;
  }
</style>