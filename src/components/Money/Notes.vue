<template>
  <div>
    <label class="notes">
      {{value}}
      <span class="name">备注</span>
      <input type="text" placeholder="请在这里输入备注"
             v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';
  }
</script>

<style lang="scss" scoped>
  .notes {
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;
    background: #f5f5f5;

    .name {
      padding-right: 16px;
    }

    input {
      flex-grow: 1;
      padding-right: 16px;
      height: 64px;
      border: none;
      background: transparent;
    }
  }
</style>