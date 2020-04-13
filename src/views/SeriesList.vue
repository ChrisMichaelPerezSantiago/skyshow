<template>
  <div>
    <main>
      <ul class="movie-info" style="border-left: thick solid #fa1e4e; margin-left: 3em !important;">
        <li><i style="margin-left: 1em;font-size: 40px !important;">
          Temporadas 
        </i></li>
      </ul>
      <div class="container">
        <div v-if="series.isLoading">
          <p class="loading">Loading</p>
        </div>
        <div v-else class="container" v-for="serie in series.data" :key="serie.ID">
          <Serie :series="serie"/>
        </div>
      <b-pagination class="pagination" :total="series_total_pages" :per-page="1" :current.sync="series_page" v-model="series_page" @input=" () => init(series_page)"></b-pagination>

      </div>
    </main>
  </div>
</template>

<script>
  import {useState , useStore} from '@u3u/vue-hooks'
  import { reactive, onMounted, watch, ref } from '@vue/composition-api';
  import Serie from '../components/Serie';

  export default {
    name: 'SeriesList',
    components:{
      Serie,
    },
    setup(){
      const store = useStore();
      const state = reactive({
        ...useState([
          'series',
        ])
      });
  
      const series_page = ref(1);
      const series_total_pages = ref(22);

      watch(() =>
        series_page.value , (value) =>{
          series_page.value = value;
          const goto = series_page;
          init(goto);
        }
      );
      const init = (series_page) => {
        store.value.dispatch("GET_ALL_SERIES" , series_page.value);
      };
  
      onMounted(() =>
        store.value.dispatch('GET_ALL_SERIES' , 1)
      );     
      
      return{
        ...state,
        series_page,
        series_total_pages,
        init
      }
    }
  };
</script>
