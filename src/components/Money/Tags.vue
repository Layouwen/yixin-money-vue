<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected : selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component
  export default class Tags extends mixins(TagHelper) {
    selectedTags: string[] = [];

    get tagList() {
      return this.$store.state.tagList;
    }

    created() {
      this.$store.commit('fetchTags');
    }

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
    padding: 16px;
    font-size: 14px;
    background: #fff;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        $h: 24px;
        $bg: #d9d9d9;
        margin-top: 4px;
        padding: 0 16px;
        margin-right: 14px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        background: $bg;

        &.selected {
          background: darken($bg, 50%);
          color: #fff;
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        padding: 0 4px;
        color: #999;
        border: none;
        border-bottom: 1px solid;
        background: transparent;
      }
    }
  }
</style>