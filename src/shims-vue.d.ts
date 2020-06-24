declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// 消除 @/ svg 报错
declare module '*.svg' {
  const content: string;
  export default content;
}