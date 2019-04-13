<template>
  <div>
    <label>{{label}}</label>
    <input type="text" v-on="listeners" :value="textInput">
  </div>
</template>
<script>
export default {
  name: "baseInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "Default label"
    },
    textInput: {
      type: String
    }
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  methods:{
    changeInputValue(){
      this.$emit('changeInputValue', event.target.value);
    }
  }
};
</script>
