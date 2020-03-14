<template>
  <div>
    <router-link :to="{name: 'MovieVideo' , params: {ID: movie.ID , id: movie.id, extra: movie.extra}}" class="item tilt-poster">
      <div class="poster" :style="{ 'background-image': 'url(' + movie.poster + ')' }">
      </div>
      <p>{{movie.title}} ({{movie.year}})</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    props:{
      movies: Object
    },
    name: 'Movie',

    setup(props){
      const movie = props.movies;

      return{
        movie
      }
    }
  };
</script>
