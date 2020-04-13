<template>
  <div>
    <main>
      <ul class="movie-info" style="border-left: thick solid #fa1e4e; margin-left: 3em !important;">
        <li><i style="margin-left: 1em;font-size: 40px !important;">
          Busqueda
          <b-field>
            <b-input class="input-text" placeholder="Buscar series , peliculas ..."
              type="search"
              icon="magnify"
              icon-clickable
              v-model="query"
            >
            </b-input>
          </b-field>
        </i></li>
      </ul>
      <div class="container">
        <div v-if="search.isLoading">
          <p class="loading">Loading</p>
        </div>
        <div v-else class="container" v-for="(content , index) in filteredDataObj" :key="index">
          <div v-if="content.type === 'serie'">
            <SSerie :series="content"/>
          </div>
          <div v-if="content.type === 'pelicula'">
             <SMovie :movies="content"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>  
  import {ref , watch , onMounted , computed} from '@vue/composition-api'
  import {useState , useStore , useGetters} from '@u3u/vue-hooks';
  import SSerie from '../components/SSerie';
  import SMovie from '../components/SMovie';


  export default {
    name: 'SearchContent',
    components:{
      SSerie,
      SMovie
    },
    setup(){
      const store = useStore();
      const state = {
        ...useState(['search'])
      };

      const getter = {
        ...useGetters(['FILTER_SPESIFIC_DATA'])
      };

      const query = ref("");
      const filteredDataObj = computed(() =>{
        return getter.FILTER_SPESIFIC_DATA.value(query.value.trim())
      });

      watch(() =>
        query.value , (value) =>{
          query.value = value;
          init(query)
        }
      )

      const init = (query) =>{
        store.value.dispatch('GET_CONTENT_SEARCH' , query.value.trim());
      }

      onMounted(() =>{
        store.value.dispatch('GET_CONTENT_SEARCH' , query.value.trim());
      });

      return{
        ...state,
        query,
        filteredDataObj
      }
    }
  }
</script>