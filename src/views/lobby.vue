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
  computed: {
    blocks() {
      return this.$store.getters.getBlocks
    }
  },
}

</script>