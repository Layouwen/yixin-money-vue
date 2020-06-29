<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag">
        <span>{{tag.name}}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';

  tagListModel.fetch();

  @Component
  export default class Labels extends Vue {
    tags = tagListModel.data;

    createTag() {
      const name = window.prompt('请输入标签名');
      if (name) {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复了');
        } else if (message === 'success') {
          window.alert('添加成功');
        }
      }else if(!name){
        window.alert('请输入标签名')
      }
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
    background: #767676;

    &-wrapper {
      margin-top: 44px;
      text-align: center;
    }
  }
</style>