<template>
  <section class="code-block">
    <h1>Code Block Page</h1>
    <textarea></textarea>

    <nav>
      <router-link to="/code/1">Previous</router-link>
      <router-link to="/code/2">Next</router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'code-block',
  async created() {
    console.log(`this.$route.params.id:`, this.$route.params.id)
  },
}
</script>