<template>
<div>
<button  v-bind="$attrs">
  {{btnName}}
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
