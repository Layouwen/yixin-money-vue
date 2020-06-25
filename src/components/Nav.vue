<template>
  <div>
    <router-link to="/labels">
      <svg>
        <use xlink:href="#label"></use>
      </svg>
      标签
    </router-link>
    <router-link to="/money">
      <svg>
        <use xlink:href="#add"></use>
      </svg>
      记账
    </router-link>
    <router-link to="/statistics">
      <svg>
        <use xlink:href="#statistics"></use>
      </svg>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
  // 自动引入所有svg
  const importAll = (requireContent: __WebpackModuleApi.RequireContext) => requireContent.keys().forEach(requireContent);
  try {
    importAll(require.context('../assets/icons',true,/\.svg$/));
  }catch(error){
    console.log(error)
  }

  export default {
    name: 'Nav.vue'
  };
</script>

<style lang="scss" scoped>
  div {
    border: 1px solid red;
  }
</style>