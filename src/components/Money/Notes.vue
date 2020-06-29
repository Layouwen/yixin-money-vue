<template>
  <div>
    <label class="notes">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             :placeholder="this.placeholder"
             v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';

    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    @Watch('value')
    onValueChanged(value: string) {
      this.$emit('update:value', value);
    }
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