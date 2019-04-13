<template>
  <div>
    <label>{{label}}</label>
    <input type="text" v-on="listeners" @input="custom" v-bind="$attrs">
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
    }
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  methods:{
    custom(){
      this.$emit('input', event.target.value);
    }
  }
};
</script>
