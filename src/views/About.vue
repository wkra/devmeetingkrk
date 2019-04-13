<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-button disabled :btn-name="'loading'"></base-button>
    <base-input v-model="textInput"></base-input>
    <h1>{{textInput}}</h1>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'about',
  components: {
    BaseButton,
    BaseInput
  },
  data: () => ({
    isBtnDisabled: true,
    textInput:'asd'
  }),
  methods: {
    changeBtnStatus(value){
      debugger
      this.isBtnDisabled = !value
    }
  }
}

</script>

