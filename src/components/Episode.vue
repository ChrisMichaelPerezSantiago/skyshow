<template>
  <div>
    <router-link :to="{name: 'ExpEpisodeVideo' , params: {ID: episode.ID , id: episode.id}}" class="item tilt-poster">
      <div id="episode-poster" class="poster" :style="{ 'background-image': 'url(' + episode.poster + ')' }">
      </div>
      <p>{{episode.title}}</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    props:{
      episodes: Object
    },
    name: 'Episode',

    setup(props){
      const episode = props.episodes;

      return{
        episode
      }
    }
  };
</script>
