<template>
  <section class="code-block">
    <h2>{{ block?.title }}</h2>
    <p>{{ block?.description }}</p>
    <pre class="answer" v-if="block" :contenteditable="!isTutor" @input="updateAnswer">{{ block.code }}</pre>
    <highlightjs class="hljs" language='javascript' :code="answer" />

    <div v-if="isCorrect" class="img-container flex justify-center align-center" :class="{ small: isSmall }"
      @click="isSmall = !isSmall">
      <img src="../assets/images/success.webp">
    </div>
    
    <nav>
      <router-link :to="'/code/' + prevId">Previous</router-link>
      <router-link :to="'/code/' + nextId">Next</router-link>
    </nav>

  </section>
</template>

<script>
import { codeService } from '../services/code.service.js'
import { socketService, SOCKET_EMIT_SET_TOPIC, SOCKET_EVENT_JOINED_TOPIC, SOCKET_EMIT_CODE_UPDATED, SOCKET_EVENT_CODE_UPDATED } from '../services/socket.service.js'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

export default {
  name: 'code-block',
  data() {
    return {
      block: null,
      prevId: null,
      nextId: null,
      answer: '',
      isTutor: false,
      isCorrect: false,
      isSmall: true
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
    socketService.on(SOCKET_EVENT_JOINED_TOPIC, (isTutor) => this.isTutor = isTutor)
    socketService.on(SOCKET_EVENT_CODE_UPDATED, answer => {
      this.answer = answer
      this.checkAnswer()
    })
  },
  methods: {
    async loadBlock() {
      this.block = await codeService.getById(this.blockId)
      this.answer = this.block.code
      socketService.emit(SOCKET_EMIT_SET_TOPIC, this.$route.params.id)
      this.getPrevNextId()
    },
    getPrevNextId() {
      if (!this.block) return
      const currIdx = this.blocks.findIndex(block => block._id === this.block._id)
      const prevIdx = (currIdx || this.blocks.length) - 1
      const nextIdx = (currIdx + 1) % this.blocks.length
      this.prevId = this.blocks[prevIdx]._id
      this.nextId = this.blocks[nextIdx]._id
    },
    updateAnswer(ev) {
      this.answer = ev.target.innerText
      socketService.emit(SOCKET_EMIT_CODE_UPDATED, this.answer)
      this.checkAnswer()
    },
    checkAnswer() {
      console.log('checking')
      const regex = /\n|\t| /g
      this.isCorrect =
        this.answer.replaceAll(regex, '') === this.block.solution.replaceAll(regex, '')
    }
  },
  watch: {
    blockId() {
      this.loadBlock()
    }
  }
}
</script>