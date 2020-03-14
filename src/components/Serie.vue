<template>
  <div>
    <router-link :to="{name: 'EpisodesVideo' , params: {ID: serie.ID , id: serie.id, extra: serie.extra}}" class="item tilt-poster">
      <div class="poster" :style="{ 'background-image': 'url(' + serie.poster + ')' }">
      </div>
      <p>{{serie.title}} ({{serie.year}})</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    props:{
      series: Object
    },
    name: 'Serie',

    setup(props){
      const serie = props.series;

      return{
        serie
      }
    }
  };
</script>
