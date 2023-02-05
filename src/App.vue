<template>
  <section class="app-container main-container">
    <app-header></app-header>

    <main class="main-container full">
      <RouterView />
    </main>

    <app-footer></app-footer>
  </section>

</template>



<script>
import appHeader from './components/app-header.vue'
import { RouterLink, RouterView } from 'vue-router'
import appFooter from './components/app-footer.vue'
export default {
  name: 'app',
  components: {
    RouterLink,
    RouterView,
    appHeader,
    appFooter,
  },
  created() {
    console.log('App created')
  },
}
</script>



