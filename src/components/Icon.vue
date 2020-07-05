<template>
  <svg class="icon" @click="$emit('click',$emit)">
    <use :xlink:href="'#'+name"></use>
  </svg>
</template>

<script lang="ts">
  // 自动引入所有svg
  const importAll = (requireContent: __WebpackModuleApi.RequireContext) => requireContent.keys().forEach(requireContent);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (error) {
    console.log(error);
  }

  export default {
    props: ['name'],
    name: 'Icon'
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>