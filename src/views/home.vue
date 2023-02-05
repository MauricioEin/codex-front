<template>
  <section class="app-home flex justify-center align-center">
    <h1>Home Page</h1>
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
