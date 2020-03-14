<template>
  <b-navbar-dropdown class="genre-list" label="Géneros">
    <router-link :to="{name: 'ByGenre' , params:{genres:'accion'}}">
      <b-navbar-item>accion</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'accion-aventura'}}">
      <b-navbar-item>accion-aventura</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'action'}}">
      <b-navbar-item>action</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'action-adventure'}}">
      <b-navbar-item>action-adventure</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'adventure'}}">
      <b-navbar-item>adventure</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'animacion'}}">
      <b-navbar-item>animacion</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'aventura'}}">
      <b-navbar-item>aventura</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'belica'}}">
      <b-navbar-item>belica</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'biografia'}}">
      <b-navbar-item>biografia</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'ciencia-ficcion'}}">
      <b-navbar-item>ciencia-ficcion</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'comedia'}}">
      <b-navbar-item>comedia</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'comedy'}}">
      <b-navbar-item>comedy</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'crimen'}}">
      <b-navbar-item>crimen</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'deportes'}}">
      <b-navbar-item>deportes</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'documental'}}">
      <b-navbar-item>documental</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'drama'}}">
      <b-navbar-item>drama</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'estrenos'}}">
      <b-navbar-item>estrenos</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'familia'}}">
      <b-navbar-item>familia</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'family'}}">
      <b-navbar-item>family</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'fantasia'}}">
      <b-navbar-item>fantasia</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'guerra'}}">
      <b-navbar-item>guerra</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'historia'}}">
      <b-navbar-item>historia</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'horror'}}">
      <b-navbar-item>horror</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'misterio'}}">
      <b-navbar-item>misterio</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'musica'}}">
      <b-navbar-item>musica</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'mystery'}}">
      <b-navbar-item>mystery</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'pelicula-de-la-television'}}">
      <b-navbar-item>pelicula-de-la-television</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'pelicula-de-tv'}}">
      <b-navbar-item>pelicula-de-tv</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'proximos-estrenos'}}">
      <b-navbar-item>proximos-estrenos</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'reality'}}">
      <b-navbar-item>reality</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'sci-fi-fantasy'}}">
      <b-navbar-item>sci-fi-fantasy</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'soap'}}">
      <b-navbar-item>soap</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'suspense'}}">
      <b-navbar-item>suspense</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'suspenso'}}">
      <b-navbar-item>suspenso</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'talk'}}">
      <b-navbar-item>talk</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'terror'}}">
      <b-navbar-item>terror</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'war-politics'}}">
      <b-navbar-item>war-politics</b-navbar-item>
    </router-link>
    <router-link :to="{name: 'ByGenre' , params:{genres:'western'}}">
      <b-navbar-item>western</b-navbar-item>
    </router-link>
  </b-navbar-dropdown>
</template>

<script>
  export default {
    name: "GenreList"
  };
</script>