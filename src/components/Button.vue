<template>
  <button class="button"
          @click="$emit('click', $event)">
    <slot/>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>

<style lang="scss" scoped>
  .button {
    padding: 0 16px;
    height: 40px;
    color: #fff;
    border: none;
    border-radius: 4px;
    background: #3f72af;

    &-wrapper {
      margin-top: 44px;
      text-align: center;
    }
  }
</style>