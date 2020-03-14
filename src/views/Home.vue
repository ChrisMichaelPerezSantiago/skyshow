<template>
  <div>
    <main>
      <ul class="movie-info" style="border-left: thick solid #6649b8; margin-left: 3em !important;">
        <li><i style="margin-left: 1em;font-size: 40px !important;">
          Temporadas 
          <b-button tag="router-link" to="/SeriesList" type="is-link">
            ver mas
          </b-button>
        </i></li>
      </ul>
      <div class="container">
        <div v-if="series.isLoading">
          <p class="loading">Loading</p>
        </div>
        <div v-else class="container" v-for="serie in series.data" :key="serie.ID">
          <Serie :series="serie"/>
        </div>
      </div>

       <ul class="movie-info" style="border-left: thick solid #6649b8; margin-left: 3em !important;">
        <li><i style="margin-left: 1em;font-size: 40px !important;">
          Últimos Episodios
          <b-button tag="router-link" to="/EpisodesList" type="is-link">
            ver mas
          </b-button>
        </i></li>
      </ul>
      <div class="container">
        <div v-if="episodes.isLoading">
          <p class="loading">Loading</p>
        </div>
        <div v-else class="container" v-for="episode in episodes.data" :key="episode.ID">
          <Episode :episodes="episode"/>
        </div>
      </div>

      <ul class="movie-info" style="border-left: thick solid #6649b8; margin-left: 3em !important;">
        <li><i style="margin-left: 1em;font-size: 40px !important;">Películas 
          <b-button tag="router-link" to="/MoviesList" type="is-link">
            ver mas
          </b-button>
        </i></li>
      </ul>
      <div class="container">
        <div v-if="movies.isLoading">
          <p class="loading">Loading</p>
        </div>
        <div v-else class="container" v-for="movie in movies.data" :key="movie.ID">
          <Movie :movies="movie"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import {useState , useStore} from '@u3u/vue-hooks'
  import { reactive, onMounted } from '@vue/composition-api';
  import Serie from '../components/Serie';
  import Movie from '../components/Movie';
  import Episode from '../components/Episode';

  export default {
    name: 'Home',
    components:{
      Serie,
      Movie,
      Episode
    },
    setup(){
      const store = useStore();
      const state = reactive({
        ...useState([
          'series',
          'movies',
          'episodes'
        ])
      });
  
  
      onMounted(() =>
        store.value.dispatch('GET_ALL_SERIES' , 1),
        store.value.dispatch('GET_ALL_MOVIES' , 1),
        store.value.dispatch('GET_EPISODES' , 1)
      );
      
      return{
        ...state
      }
    }
  };
</script>
