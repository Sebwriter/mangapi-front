<template>
<section id="header">
  <h1>
    <a href="index.html">MangApi</a>
  </h1>
  <NavbarView />
  </section>
</template>

<script>
import NavbarView from "./NavbarView.vue"

export default {
  name: 'HeaderView',
  components: {
    NavbarView
  }
}
</script>