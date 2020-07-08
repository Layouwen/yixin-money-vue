<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component({
    components: {Button},
  })
  export default class Labels extends mixins(TagHelper) {

    get tags() {
      return this.$store.state.tagList;
    }

    beforeCreate() {
      this.$store.commit('fetchTags');
    }

    createTag() {
      const name = window.prompt('请输入内容');
      if (!name) {return window.alert('标签名不能为空');}
      this.$store.commit('createTag', name);
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    padding-left: 16px;
    font-size: 16px;
    background: #fff;

    > .tag {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 44px;
      border-bottom: 1px solid #e6e6e6;

      > svg {
        margin-right: 16px;
        width: 18px;
        height: 18px;
        color: #666;
      }
    }
  }

  .createTag {
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