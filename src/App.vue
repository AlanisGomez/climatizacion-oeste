<template>
  <div id="app">
    <landing-page/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage'

export default {
  name: 'App',
  components: {
    LandingPage,
  }
}
</script>

<style lang="scss">
@import './assets/css/theme.scss'
</style>
