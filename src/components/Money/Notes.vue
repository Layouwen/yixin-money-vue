<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="请在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Notes'
  };
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