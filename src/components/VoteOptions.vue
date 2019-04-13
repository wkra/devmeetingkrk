<template>
  <div v-bind="$attrs">
    <slot name="header"></slot>
    <slot name="options" :options="options">
    </slot>
  </div>
</template>
<script>

export default {
  name: 'baseButton',
  props: {
    btnName: {
      type: String
    }
  },
  data: () => ({
    options: [{name: '1'}, {name: '2'}]
  })
}

</script>
