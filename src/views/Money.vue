<template>
  <div>
    <Layout class-prefix="layout">
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
      <div>
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="请在这里输入备注">
        </label>
      </div>
      <div class="tags">
        <div class="new">
          <button>新增标签</button>
        </div>
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Money',
  };
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .layout-wrapper {
  }
</style>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  .tags {
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
    padding: 16px;
    font-size: 14px;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        $h: 24px;
        margin-top: 4px;
        padding: 0 16px;
        margin-right: 14px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        background: #d9d9d9;
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

  .types {
    display: flex;
    font-size: 24px;
    background: #c4c4c4;

    > li {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 64px;

      &.selected::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }

  .numberPad {
    .output {
      @extend %innerShadow;
      padding: 9px 16px;
      font-family: Consolas, monospace;
      font-size: 36px;
      text-align: right;
    }

    .buttons {
      @extend %clearFix;

      > button {
        float: left;
        width: 25%;
        height: 64px;
        border: none;
        background: transparent;

        &.ok {
          float: right;
          height: 64*2px;
        }

        &.zero {
          width: 25*2%;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8),&:nth-child(11),&:nth-child(13) {
          background: darken($bg, 4*4%);
        }
        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }
        &:nth-child(12) {
          background: darken($bg, 4*6%)
        }
      }
    }
  }
</style>