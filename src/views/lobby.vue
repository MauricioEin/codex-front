<template>
  <section>
    <h1>Choose Code Block</h1>
    <block-list :blocks="blocks" />

  </section>
</template>

<script>
import blockList from '../components/block-list.vue'
export default {
  name: 'lobby',
  components: {
    blockList
  },
  data(){
    return{
      blocks: [{title:1},{title:2},{title:3},{title:4},{title:5}]
    }
  }
}
</script>