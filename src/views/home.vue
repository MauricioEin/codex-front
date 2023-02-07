<template>
  <section class="app-home flex column justify-center align-center">
    <img src="../assets/images/x.png">
    <h2>Welcome Home.</h2>
    <h4>Codex is you best platform for remote-tutoring when it has to do with JS.</h4>

    <RouterLink to="/code"><button>Check it out</button></RouterLink>
  </section>
</template>

<script>
export default {
  name: 'home',
  computed: {
    getMsg() {
      return this.$store.getters.getMsg
    },
  },
}
</script>
