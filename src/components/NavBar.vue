<template>
  <b-navbar class="navbar">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          class="img-main"
          src="../assets/img/skyshow-logo.png"
          alt="SKYSHOW"
          >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/'}">
        🏠 Inicio
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'SeriesList' }">
        🍿 Series
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'EpisodesList' }">
        🎬 Episodios
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'MoviesList' }">
        🎞️ Peliculas
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'SearchContent' }">
        🔍 Buscador
      </b-navbar-item>
      <GenresList/>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <b-button
          class=""
          @click="isCardModalActive = true"
          >
          Info 
        </b-button>
        <b-modal class="video-modal" :active.sync="isCardModalActive" :width="900" scroll="keep">
          <header class="modal-card-head">
            <p class="modal-card-title">🛈 Información Importante</p>
          </header>
          <section class="modal-card-body">
            <img class="img-info" src="../assets/img/skyshow-logo.png"  alt="logo">
            <p style="color: black;">Ninguno de los videos y contenido en general es de nuestra propiedad y mucho menos se encuentran alojados en nuestros servidores.</p>
          </section>
        </b-modal>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
  import {ref} from '@vue/composition-api'
  import GenresList from './GenresList'
  
  export default {
    name: "NavBar",
    components:{
      GenresList
    },
    setup(){
      const isCardModalActive = ref(false);
  
      return{
        isCardModalActive
      }
    }
  };
</script>

<style>
  .img-main{
    max-height: 50px !important;
  }
  .img-info{
    max-height: 200px !important;
    display: block;
    margin-left: auto; 
    margin-right: auto; 
  }
</style>
