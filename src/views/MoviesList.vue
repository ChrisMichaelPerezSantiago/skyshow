<template>
  <div>
    <main>
      <ul class="movie-info" style="border-left: thick solid #fa1e4e; margin-left: 3em !important;">
        <li><i style="margin-left: 1em;font-size: 40px !important;">Películas 
        </i></li>
      </ul>
      <div class="container">
        <div v-if="movies.isLoading">
          <p class="loading">Loading</p>
        </div>
        <div v-else class="container" v-for="movie in movies.data" :key="movie.ID">
          <Movie :movies="movie"/>
        </div>
        <b-pagination class="pagination" :total="movies_total_pages" :per-page="1" :current.sync="movies_page" v-model="movies_page" @input=" () => init(movies_page)"></b-pagination>
      </div>
    </main>
  </div>
</template>

<script>
  import {useState , useStore} from '@u3u/vue-hooks'
  import { reactive, onMounted, ref, watch } from '@vue/composition-api';
  import Movie from '../components/Movie';

  export default {
    name: 'MoviesList',
    components:{
      Movie
    },
    setup(){
      const store = useStore();
      const state = reactive({
        ...useState([
          'movies'
        ])
      });

      const movies_page = ref(1);
      const movies_total_pages = ref(128);

      watch(() =>
        movies_page.value , (value) =>{
          movies_page.value = value;
          const goto = movies_page;
          init(goto);
        }
      );

      const init = (movies_page) => {
        store.value.dispatch("GET_ALL_MOVIES" , movies_page.value);
      };

      onMounted(() =>
        store.value.dispatch('GET_ALL_MOVIES' , 1)
      );
      
      return{
        ...state,
        init,
        movies_page,
        movies_total_pages
      }
    }
  };
</script>