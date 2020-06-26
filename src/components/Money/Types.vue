<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
          @click="selectedType('-')">支出
      </li>
      <li :class="type === '+' && 'selected'"
          @click="selectedType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Types',
    data() {
      return {
        type: '-' // 减号表示支出，加号表示收入
      }
    },
    methods: {
      selectedType(type) {
        if (type !== '-' && type !== '+') {
          throw new Error('type is unknow')
        }
        this.type = type
      }
    }
  }
</script>

<style lang="scss" scoped>
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
</style>