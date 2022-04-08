<template>
  <div id="app" class="homepage is-preload">
    <div id="page-wrapper">

		<!-- Header -->
		<section id="header">

    <HeaderView /> 
    </section>
    <router-view/>
    <FooterView />
  </div>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  name:'App',
  components:{
    HeaderView,
    FooterView
  }
}

</script>



<style src="./assets/css/main.css">
</style>
