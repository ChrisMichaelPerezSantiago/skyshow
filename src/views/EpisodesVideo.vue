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
                <b-field label="Temporadas">
                    <b-select placeholder="Temporadas" v-model="season_selected">
                      <option
                        v-for="(season , index) in Array.from({length: total_seasons}, (v , k) => k + 1)"
                        :value="season"
                        :key="index">
                        {{ season }}
                      </option>
                    </b-select>
                  </b-field>
                  <b-field label="Episodios">
                    <b-select placeholder="Episodios" v-model="episode_selected">
                      <option
                        v-for="(season , index) in bySeason[season_selected].episodes"                    
                        :value="season"
                        :key="index">
                        {{ season }}
                      </option>
                    </b-select>
                  </b-field>
                  <b-field label="Videos">
                    <b-select placeholder="Videos" v-model="option">
                      <option
                        v-for="(video , index) in series.video.map(xs => xs.iframe)" 
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
        <p>{{serie[0][0].sinopsis}}</p>
        <ul class="movie-info">
          <li><i>Guionista</i> {{serie[0][0].extra[0].cast_members.creator.name}}</li>
          <li><i>Distribuidor</i> 📺{{serie[0][0].extra[0].channel}}</li>
          <li><i>Clasificación</i> ⭐{{serie[0][0].rating}}</li>
          <li><i>Temporadas</i> {{serie[0][0].extra[0].total_seasons}}</li>
          <li><i>Estreno</i> {{serie[0][0].year}}</li>
          <li><i>Primer Episodio</i> {{serie[0][0].extra[0].first_air_date.split('date')[1]}}</li>
          <li><i>Último episodio</i> {{serie[0][0].extra[0].last_air_date.split('transmisión')[1]}}</li>
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
      <div class="member-list" v-for="(member , index) in serie[0][0].extra[0].cast_members.members_list[0].members_info" :key="index">
        <b-tooltip :label="member.characters.real_name"
          position="is-bottom" type="is-danger">
          <img class="avatar" :src="member.poster">
        </b-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref , watch} from '@vue/composition-api'
  import {useState , useStore , useRouter} from '@u3u/vue-hooks';
  const nSQL = require('@nano-sql/core').nSQL;
  
  
  export default {
    name: 'EpisodesVideo',
    setup(){
      const store = useStore();
      const {route} = useRouter();
  
      const state = {
        ...useState(['series'])
      }
      const serie = ref([]);
      const params = {
        id: route.value.params.id,
        ID: route.value.params.ID,
        extra: route.value.params.extra,
      };
  
      nSQL().useDatabase('skyshowdb');
        nSQL('series');
        nSQL()
          .query("select")
          .where(["ID" , "=" , params.ID])
          .exec()
          .then((rows) =>{
            serie.value.push(rows)
          });
      
      const isCardModalActive = ref(false)
      const season_selected = ref("1");
      const episode_selected = ref("");
      const episodesList = ref([]);
      const option = ref("");
  
      const total_seasons = params.extra[0].season_list.length;
      const season_list = params.extra[0].season_list;
      const bySeason = season_list.reduce((byId , seasons) =>{
        byId[seasons.season] = seasons
        return byId
      } , {});
  
       watch(() =>
        episode_selected.value , (value) =>{
          episode_selected.value = value;
          const eps = episode_selected.value;
          const id = `${params.id.replace('ver-' , '')}-${eps}`;    
          console.log(id);
          store.value.dispatch("GET_VIDEO_SERIES" , id)
        }
      );
  
      return{
        ...state,
        params,
        serie,
        option,
        season_selected,
        episode_selected,
        bySeason,
        episodesList: episodesList.value,
        total_seasons,
        isCardModalActive
      }
    }
  }
</script>

<style>
  #player {
    background-color:white;
    display: inline-block;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    height: 30em;
  }

  b-modal{
    background-color:black !important;
  }
</style>