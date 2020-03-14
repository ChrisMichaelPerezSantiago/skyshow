<template>
  <div>
    <main>
      <ul class="movie-info" style="border-left: thick solid #6649b8; margin-left: 3em !important;">
        <li><i style="margin-left: 1em;font-size: 40px !important;">
          Últimos Episodios
        </i></li>
      </ul>
      <div class="container">
        <div v-if="episodes.isLoading">
          <p class="loading">Loading</p>
        </div>
        <div v-else class="container" v-for="episode in episodes.data" :key="episode.ID">
          <Episode :episodes="episode"/>
        </div>
      <b-pagination class="pagination" :total="episoddes_total_pages" :per-page="1" :current.sync="episodes_page" v-model="episodes_page" @input=" () => init(episodes_page)"></b-pagination>
      </div>
    </main>
  </div>
</template>

<script>
  import {useState , useStore} from '@u3u/vue-hooks'
  import { reactive, onMounted, watch, ref } from '@vue/composition-api';
  import Episode from '../components/Episode';

  export default {
    name: 'EpisodesList',
    components:{
      Episode,
    },
    setup(){
      const store = useStore();
      const state = reactive({
        ...useState([
          'episodes',
        ])
      });
  
      const episodes_page = ref(1);
      const episoddes_total_pages = ref(282);

      watch(() =>
        episodes_page.value , (value) =>{
          episodes_page.value = value;
          const goto = episodes_page;
          init(goto);
        }
      );
      const init = (episodes_page) => {
        store.value.dispatch("GET_EPISODES" , episodes_page.value);
      };
  
      onMounted(() =>
        store.value.dispatch('GET_EPISODES' , 1)
      );     
      
      return{
        ...state,
        episodes_page,
        episoddes_total_pages,
        init
      }
    }
  };
</script>
