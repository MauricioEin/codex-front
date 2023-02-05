<template>
  <section class="social-media flex align-center justify-center">
    <button v-for="(social, idx) in socials" :key="idx" :class="social.icon" @click="navigateTo(social.link)"
      :title=social.title></button>
  </section>
</template>

<script>
export default {
  name: 'social-media',
  data() {
    return {
      socials: [
        {
          link: 'https://www.facebook.com/mauricio.einhorn.3',
          icon: 'fa-brands fa-square-facebook',
          title: 'Facebook'
        },
        {
          link: 'https://www.linkedin.com/in/mauricio-einhorn-bb14b6236/',
          icon: 'fa-brands fa-linkedin',
          title: 'LinkedIn'
        },
        {
          link: 'https://github.com/MauricioEin',
          icon: 'fa-brands fa-square-github',
          title: 'GitHub'
        },
      ],
    }
  },
  methods: {
    navigateTo(link) {
      window.open(link)
    },
  },
}
</script>
