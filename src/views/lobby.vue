<template>
  <section class="flex column justify-center align-center">
    <h2>Choose Code Block</h2>
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