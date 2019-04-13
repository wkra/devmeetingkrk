<template>
  <div class="score">
    <h1>This is an score page</h1>
    <vote-options>
      <template #header>
          <h3>
            Custom header
          </h3>
        </template>
        <template #options="{options}">
          <ul v-for="(option, index) in options" :key="index">
<li>{{option.name}}</li>
          
          </ul>
         </template>
    </vote-options>
  </div>
</template>

<script>
import VoteOptions from '@/components/VoteOptions.vue'

export default {
  name: 'about',
  components: {
    VoteOptions
  },
  data: () => ({
    
  }),
  methods: {

  }
}

</script>