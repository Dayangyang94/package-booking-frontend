<template>
<div>
    <h1>包裹入库</h1>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="运单号"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'packageId',
          {rules: [{ required: true, message: 'Please input your packageId!' }]}
        ]"
        placeholder="2019070001"
      />
    </a-form-item>
    <a-form-item
      label="收件人"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'name',
          {rules: [{ required: true, message: 'Please input your name!' }]}
        ]"
        placeholder="姓名"
       />
    </a-form-item>
    <a-form-item
      label="电话号"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'telephone',
          {rules: [{ required: true, message: 'Please input your telephone!' }]}
        ]"
        placeholder="12345678"
      />
    </a-form-item>
    <a-form-item
      label="重量"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'weight',
          {rules: [{ required: true, message: 'Please input your weight!' }]}
        ]"
        placeholder="3kg"
      />
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
           this.$store.dispatch('createTodos',values)
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>