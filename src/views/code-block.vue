<template>
  <section class="code-block flex column space-between">
    <div class="exercise" v-if="block">
      <h2>{{ block.title }}</h2>
      <p>{{ block.description }}</p>
      <pre class="answer" :contenteditable="!isTutor" @input="updateAnswer">{{ block.code }}</pre>
      <highlightjs class="hljs" language='javascript' :code="answer" />
      <highlightjs v-if="isSolutionShown" language='javascript' :code="'Solution:\n' + block.solution" />
      <button v-if="isTutor" @click="isSolutionShown = !isSolutionShown">
        {{ isSolutionShown? 'Hide solution': 'Show solution' }}
      </button>

    </div>
    <div v-if="isCorrect" class="img-container flex" :class="{ small: isSuccessSmall }"
      @click="isSuccessSmall = !isSuccessSmall">
      <img src="../assets/images/success.webp">
    </div>

    <nav>
      <router-link :to="'/code/' + prevId">Previous</router-link>
      <router-link :to="'/code/' + nextId">Next</router-link>
    </nav>

    <div class="user-msg" :class="{ empty: !isMsg }">{{ msg }}</div>
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
      isTutor: null,
      isCorrect: false,
      isSuccessSmall: false,
      isSolutionShown: false,
      msg: '',
      isMsg: false
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
    socketService.on(SOCKET_EVENT_JOINED_TOPIC, (isTutor) => {
      this.isTutor = isTutor
      this.showMsg()
    })
    socketService.on(SOCKET_EVENT_CODE_UPDATED, answer => {
      this.answer = answer
      this.checkAnswer()
    })
  },
  methods: {
    async loadBlock() {
      this.block = await codeService.getById(this.blockId)
      this.answer = this.block.code
      this.isCorrect = this.isSuccessSmall = this.isSolutionShown = false
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
    },
    showMsg() {
      this.msg = this.isTutor ?
        'Welcome, tutor.\nWaiting for your student to join...'
        : 'Welcome!\nFeel free to start.'
      this.isMsg = true
      const blockId = this.blockId
      setTimeout(() => {
        if (this.blockId === blockId)
          this.isMsg = false
      }, 2000)

    }
  },
  watch: {
    blockId() {
      this.loadBlock()
    },
  }
}
</script>