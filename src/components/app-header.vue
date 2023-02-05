<template>
  <header class="app-header full main-container">
    <div class="header-container flex space-between align-center">
      <h1>Codex</h1>
      <div class="action-container flex align-center">
        <button
          @click="isOpen = !isOpen"
          class="icon menu-btn flex align-center"
          v-icon="'bars'"
        ></button>
      </div>
      <app-nav :isOpen="isOpen" @toggle-open="isOpen = !isOpen"></app-nav>
    </div>
  </header>
</template>

<script>
import appNav from './app-nav.vue'
export default {
  name: 'app-header',
  data() {
    return {
      isOpen: false,
    }
  },
  components: {
    appNav,
  },
}
</script>

<style></style>
