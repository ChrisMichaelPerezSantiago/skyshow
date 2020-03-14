<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <br><br><br>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar';
  import Footer from './components/Footer.vue';

  export default {
    components:{
      Footer,
      NavBar
    }
  }
</script>
