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
  data() {
    return {
      blocks: [{ _id: 1, title: 'Exercise #1' }, { _id: 2, title: 'Exercise #2' }, { _id: 3, title: 'Exercise #3' }, { _id: 4, title: 'Exercise #4' }, { _id: 5, title: 'Exercise #5' }]
    }
  }
}
</script>