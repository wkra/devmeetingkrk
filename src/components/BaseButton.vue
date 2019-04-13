<template>
<div>
<button  v-bind="$attrs">
  <slot></slot>
</button>
</div>

  
</template>
<script>

export default {
  name: 'baseButton',
  props: {
    btnName: {
      type: String
    },
  }
}

</script>
