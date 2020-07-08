<template>
  <ul class="tabs" :class="{[classPreFix+'-tabs']: classPreFix}">
    <li class="tabs-item" v-for="item in dataSource"
        :class="liClass(item)"
        :key="item.value"
        @click="select(item)">{{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = { text: string; value: string }

  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array})
    dataSource!: DataSourceItem[];
    @Prop(String) readonly value!: string;
    @Prop(String) classPreFix?: string;

    liClass(item: DataSourceItem) {
      return {
        [this.classPreFix + '-tabs-item']: this.classPreFix,
        selected: item.value === this.value,
      };
    }

    select(item: DataSourceItem) {
      this.$emit('update:value', item.value);
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {
    display: flex;
    font-size: 24px;
    background: #fff;
    color: #5976de;
    border: 1px solid #5976de;

    &-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 50px;

      &.selected {
        color: #fff;
        background: #5976de;
      }

      &.selected::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        /*background: #fff;*/
      }
    }
  }
</style>