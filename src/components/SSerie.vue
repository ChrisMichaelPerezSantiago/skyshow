<template>
  <div>
    <router-link :to="{name: 'SEpisodesVideo' , params: {id: serie.id, extra: serie.extra}}" class="item tilt-poster">
      <div class="poster" :style="{ 'background-image': 'url(' + serie.poster + ')' }">
      </div>
      <p>{{serie.title}}</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    props:{
      series: Object
    },
    name: 'SSerie',

    setup(props){
      const serie = props.series;

      return{
        serie
      }
    }
  };
</script>
