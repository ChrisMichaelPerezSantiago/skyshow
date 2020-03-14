<template>
  <div>
    <main>
      <ul class="movie-info" style="border-left: thick solid #6649b8; margin-left: 3em !important;">
        <li><i style="margin-left: 1em;font-size: 40px !important;">
          Género
        </i></li>
      </ul>
      <div class="container">
        <div v-if="genres.isLoading">
          <p class="loading">Loading</p>
        </div>
        <div v-else class="container" v-for="(content , index) in genres.data" :key="index">
          <div v-if="content.type === 'serie'">
            <GSerie :series="content"/>
          </div>
          <div v-else-if="content.type === 'pelicula'">
             <GMovie :movies="content"/>
          </div>
        </div>
          <b-pagination class="pagination" :total="total_pages" :per-page="1" :current.sync="page" v-model="page" @input="() => init(page)"></b-pagination>
      </div>
    </main>
  </div>
</template>

<script>  
  import {ref , watch , onMounted} from '@vue/composition-api'
  import {useState , useStore , useRouter} from '@u3u/vue-hooks';
  import GSerie from '../components/GSerie';
  import GMovie from '../components/GMovie';


  export default {
    name: 'ByGenre',
    components:{
      GSerie,
      GMovie
    },
    setup(){
      const store = useStore();
      const {route} = useRouter();
      const state = {
        ...useState(['genres'])
      };

      const genre = ref(route.value.params.genres);
      const page = ref(1);
      const total_pages = ref(105);

      watch(() =>
        page.value , (value) =>{
          page.value = value;
          const goto = page;
          const info = {genre: genre.value , page: goto}
          init(info);
        }
      )

      watch(() =>
        genre.value , (value) =>{
          genre.value = value;
          const goto = page;
          store.value.dispatch('GET_GENRES' , {
            genre: genre,
            page: goto
          });
        }
       )

      const init = (page) =>{
        store.value.dispatch('GET_GENRES' , {
          genre: genre.value,
          page: page.value
        });
      }

      onMounted(() =>{
        store.value.dispatch('GET_GENRES' , {
          genre: genre.value,
          page: page.value
        });
      });

      console.log('genres' , state.genres)

      return{
         ...state,
        init,
        page,
        genre,
        total_pages
      }
    }
  }
</script>