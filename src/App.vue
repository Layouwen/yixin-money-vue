<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: $font-hei;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background: #f7f7f7;
  }

  #app {
    margin: 0 auto;
    max-width: 1366px;
  }
</style>
