<template>
  <section class="about flex column justify-center align-center">
    <h3>CodeX is a platform for remote tutoring in JS,<br>made by Mauricio Einhorn as a home interview task,<br>implementing:
    </h3>
    <div class="stack-details flex">
      <a v-for="(repo, idx) in repos" :key="idx" :href="repo.link" target="_blank" class="repo-link">
        <h4 class="list-header">{{ repo.title }}</h4>
        <p v-for="(element, idx) in repo.elements" :key="idx">{{ element }}</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      repos: [
        {
          link: 'https://github.com/MauricioEin/codex-front',
          title: 'Front End',
          elements: ['Vue.js3', 'Scss', 'Vuex State Management', 'Highlight.js', 'Axios']
        },
        {
          link: 'https://github.com/MauricioEin/codex-back',
          title: 'Back End',
          elements: ['node.js','mongoDB','socket.io']
        }
      ]
    }
  },
  methods: {
    navigate() {
      window.open('')
    },
  }
}
</script>