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
                        v-for="(video , index) in episodes.video.map(xs => xs.iframe)" 
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
        <p>{{episode[0][0].sinopsis}}</p>
        <ul class="movie-info">
          <li><i>Episodio</i> ⭐{{episode[0][0].episode_name}}</li>
          <li><i>Calidad</i> {{episode[0][0].quality}}</li>
          <li><i>Fecha de publicación</i> {{episode[0][0].date}}</li>
        
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
          
          <li><i></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref , onMounted } from "@vue/composition-api";
  import { useState, useStore, useRouter } from "@u3u/vue-hooks";
  const nSQL = require('@nano-sql/core').nSQL;

  export default {
    name: 'ExpEpisodeVideo',
    
    setup(){
      const store = useStore();
      const { route } = useRouter();
      
      const state = {
        ...useState(["episodes"])
      };

      const params = {
        ID: route.value.params.ID,
        id: route.value.params.id,
      };

      const isCardModalActive = ref(false);
      const option = ref('');
      const episode = ref([]);

      nSQL().useDatabase('skyshowdb');
        nSQL('episodes');
        nSQL()
          .query("select")
          .where(["ID" , "=" , params.ID])
          .exec()
          .then((rows) =>{
            episode.value.push(rows);
          });

      onMounted(() =>{
        store.value.dispatch("GET_VIDEO_EXP_VIDEO" , params.id);
      });

      return{
        ...state,
        option,
        episode,
        isCardModalActive
      }
    }
  }
</script>