<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑页面</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name"
                field-name="标签名"
                @update:value="update"
                placeholder="请输入你的标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    tag?: { id: string; name: string } = undefined;

    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        this.tag = tag;
      } else {
        this.$router.replace('/404');
      }
    }

    update(name: string) {
      if (this.tag) {
        tagListModel.update(this.tag.id, name);
      }
    }

    remove() {
      if (this.tag && tagListModel.remove(this.tag.id)) {
        this.$router.back();
      }
    }

    goBack() {
      this.$router.back();
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: #fff;

    > .leftIcon {
      width: 24px;
      height: 24px;
    }

    > .title {
    }

    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }

  .form-wrapper {
    margin-top: 8px;
    background: #fff;
  }

  .button-wrapper {
    padding: 16px;
    margin-top: 44-16px;
    text-align: center;
  }
</style>