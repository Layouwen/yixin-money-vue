<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <div class="notes">
        <FormItem field-name="备注" placeholder="请输入备注的内容" @update:value="onUpdateNotes"/>
      </div>
      <Tags/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/Money/FormItem.vue';
  import store from '@/store/index2.ts';

  @Component({
    components: {FormItem, Types, Tags, NumberPad}
  })
  export default class Money extends Vue {
    record: RecordItem = {
      tags: [],
      notes: '',
      type: '-',
      amount: 0
    };

    recordList = store.recordList;

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      store.createRecord(this.record);
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
  }
</style>