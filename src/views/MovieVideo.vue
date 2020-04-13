<template>
  <div class="container section single-movie">
    <div class="row">
      <div class="col-sm-5">
        <b-modal class="video-modal" :active.sync="isCardModalActive" :width="900" scroll="keep">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                   <iframe 
                    height="100%"
                    width="144%" 
                    class="embed-responsive-item" 
                    id="player" 
                    :src="option.video_iframe"
                    frameborder="0"
                    allowfullscreen
                    >
                  </iframe>
                </div>
              </div>
              <div class="content">
                <b-field label="Videos">
                    <b-select placeholder="Videos" v-model="option">
                      <option
                        v-for="(video , index) in movies.video.map(xs => xs.iframe)" 
                        :value="video" 
                        :key="index">
                        {{ video.video_iframe }}
                      </option>
                    </b-select>
                </b-field>
                
              </div>
            </div>
          </div>
        </b-modal>
      </div>
      <div class="col-sm-7">
        <h3 class="no-underline">Sinopsis</h3>
        <p>{{movie[0][0].sinopsis}}</p>
        <ul class="movie-info">
          <li><i>Guionista</i> {{movie[0][0].extra[0].cast_members.creator.name}}</li>
          <li><i>Clasificación</i> ⭐{{movie[0][0].rating}}</li>
          <li><i>Calidad</i> {{movie[0][0].quality}}</li>
          <li><i>Duración</i> ⌛{{movie[0][0].extra[0].runtime}}</li>
          <li><i>País</i> 🌎{{movie[0][0].extra[0].country}}</li>
          <li><i>Fecha de lanzamientos</i> {{movie[0][0].extra[0].air_date}}</li>
        
          <br>
          <li>
            <i>
               <b-button type="is-danger"
                class=""
                @click="isCardModalActive = true"
              >
              Ver Contenido
              </b-button>
            </i>
          <li>
          <br>
          <li><i>Reparto</i></li>
        </ul>
      </div>
      <div class="member-list" v-for="(member , index) in movie[0][0].extra[0].cast_members.members_list[0].members_info" :key="index">
        <b-tooltip :label="member.characters.real_name"
          position="is-bottom" type="is-danger">
          <img class="avatar" :src="member.poster">
        </b-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref, onMounted , reactive} from '@vue/composition-api'
  import {useState , useStore , useRouter} from '@u3u/vue-hooks';
  const nSQL = require('@nano-sql/core').nSQL;

  export default {
    name: 'MovieVideo',
    setup(){
      const store = useStore();
      const {route} = useRouter();
  
      const state = reactive({
        ...useState(['movies'])
      });

      const movie = ref([]);
      const isCardModalActive = ref(false)
      const option = ref('');
      const params = {
        id: route.value.params.id,
        ID: route.value.params.ID,
      };

      nSQL().useDatabase('skyshowdb');
        nSQL('movies');
        nSQL()
          .query("select")
          .where(["ID" , "=" , params.ID])
          .exec()
          .then((rows) =>{
            movie.value.push(rows);
          });
            

      onMounted(() =>
        store.value.dispatch("GET_VIDEO_MOVIES" , params.id),
      );

      return{
        ...state,
        movie,
        option,
        isCardModalActive
      }
    }
  };
</script>