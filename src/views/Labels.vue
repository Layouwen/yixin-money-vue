<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>食</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>住</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>行</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: 'Labels',
  };
</script>

<style lang="scss" scoped>
  .tags {
    padding-left: 16px;
    font-size: 16px;
    background: #fff;
    > li {
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
    padding:0 16px;
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