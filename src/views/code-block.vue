<template>
  <section class="code-block">
    <h2>{{ block?.title }}</h2>
    <p>{{ block?.description }}</p>
    <textarea v-if="block" v-model="block.code"></textarea>

    <nav>
      <router-link :to="'/code/' + prevId">Previous</router-link>
      <router-link :to="'/code/' + nextId">Next</router-link>
    </nav>
  </section>
</template>

<script>
import { codeService } from '../services/code.service.js'
export default {
  name: 'code-block',
  data() {
    return {
      block: null,
      prevId: null,
      nextId: null,
    }
  },
  computed: {
    blockId() {
      return this.$route.params.id
    },
    blocks() {
      return this.$store.getters.getBlocks
    }
  },
  created() {
    this.loadBlock()
  },
  methods: {
    async loadBlock() {
      this.block = await codeService.getById(this.blockId)
      this.getPrevNextId()
    },
    getPrevNextId() {
      if (!this.block) return
      const currIdx = this.blocks.findIndex(block => block._id === this.block._id)
      const prevIdx = (currIdx || this.blocks.length) - 1
      const nextIdx = (currIdx + 1) % this.blocks.length
      this.prevId = this.blocks[prevIdx]._id
      this.nextId = this.blocks[nextIdx]._id
    }
  },
  watch: {
    blockId() {
      this.loadBlock()
    }
  }
}
</script>