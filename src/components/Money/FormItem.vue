<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             :placeholder="placeholder"
             :value="value"
             @input="onValueChanged($event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    @Prop({default: ''}) readonly value!: string;

    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    onValueChanged(value: string) {
      this.$emit('update:value', value);
    }
  }
</script>

<style lang="scss" scoped>
  .formItem {
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;

    .name {
      padding-right: 16px;
    }

    input {
      flex-grow: 1;
      padding-right: 16px;
      height: 40px;
      border: none;
      background: transparent;
    }
  }
</style>