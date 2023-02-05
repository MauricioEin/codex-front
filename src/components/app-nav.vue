<template>
  <div class="back-screen" v-if="isOpen" @click="$emit('toggle-open')"></div>
  <nav :class="['app-nav', isOpen && 'open']">
    <button class="icon close" v-icon="'times'" @click="$emit('toggle-open')"></button>

    <RouterLink v-for="(link, idx) in links" :key="idx" :to="links[idx].to" @click="$emit('toggle-open')">{{
      link.title
    }}</RouterLink>
  </nav>
</template>

<script>
export default {
  name: 'app-nav',
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      links: [
        {
          to: '/',
          title: 'Home',
        },
        {
          to: '/code',
          title: 'Exercises',
        },
        {
          to: '/about',
          title: 'About',
        },
      ],
    }
  },
}
</script>

<style>

</style>
