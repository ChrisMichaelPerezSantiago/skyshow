const type = require('./types');
const axios = require('axios');
const nSQL = require('@nano-sql/core').nSQL;

nSQL().useDatabase('skyshowdb');


export const actions = {
  GET_ALL_SERIES({commit} , page){
    commit(type.IS_LOADING_SERIES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/series/${page}`)
      .then(res =>{
        nSQL('series')
          .query('upsert' , res.data.series)
          .exec()
          .then(doc =>{
            commit(type.SET_ALL_SERIES , doc);
            setTimeout(() => {
              commit(type.IS_LOADING_SERIES , false);
            }, 1000);
          }).catch((err) =>{
            console.log(err)
          });
      });
  },
  GET_VIDEO_SERIES({commit} , id){
    commit(type.IS_LOADING_SERIES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/video_serie/${id}`)
      .then(doc =>{
        commit(type.SET_VIDEO_SERIES , doc.data.video_iframe)
        setTimeout(() => {
          commit(type.IS_LOADING_SERIES , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_VIDEO_SSERIES({commit} , id){
    commit(type.IS_LOADING_SEARCH , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/video_serie/${id}`)
      .then(doc =>{
        commit(type.SET_VIDEO_SEARCH , doc.data.video_iframe)
        setTimeout(() => {
          commit(type.IS_LOADING_SEARCH , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_VIDEO_EXP_VIDEO({commit} , id){
    commit(type.IS_LOADING_EPISODES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/video_serie/${id}`)
      .then(doc =>{
        commit(type.SET_EPISODE_VIDEO , doc.data.video_iframe)
        setTimeout(() => {
          commit(type.IS_LOADING_EPISODES , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_ALL_MOVIES({commit} , page){
    commit(type.IS_LOADING_MOVIES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/movies/${page}`)
      .then(res =>{
        nSQL('movies')
          .query('upsert' , res.data.movies)
          .exec()
          .then(doc =>{
            commit(type.SET_ALL_MOVIES , doc);
            setTimeout(() => {
              commit(type.IS_LOADING_MOVIES , false);
            }, 1000);
          }).catch((err) =>{
            console.log(err)
          });
      });
  },
  async GET_VIDEO_MOVIES({commit} , id){
    commit(type.IS_LOADING_MOVIES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/video_movie/${id}`)
      .then(res =>{
        commit(type.SET_VIDEO_MOVIES , res.data.video_iframe); 
        setTimeout(() =>{
          commit(type.IS_LOADING_MOVIES , true) 
        } , 1000)
      }).catch(err =>{
        console.log(err);
      });
  },
  GET_VIDEO_SMOVIES({commit} , id){
    commit(type.IS_LOADING_SEARCH , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/video_movie/${id}`)
      .then(doc =>{
        commit(type.SET_SEARCH_VIDEO_MOVIES , doc.data.video_iframe);
        setTimeout(() => {
          commit(type.IS_LOADING_SEARCH , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_CONTENT_SEARCH({commit} , query){
    commit(type.IS_LOADING_SEARCH , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/search/${query}`)
      .then(doc =>{
        commit(type.SET_SEARCH , doc.data.content);
        setTimeout(() =>{
          commit(type.IS_LOADING_SEARCH , false);
        } , 1000);
      })
  }, 
  GET_EPISODES({commit} , page){
    commit(type.IS_LOADING_EPISODES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/episodes/${page}`)
      .then(res =>{
        nSQL('episodes')
          .query('upsert' , res.data.episodes)
          .exec()
          .then(doc =>{
            commit(type.SET_EPISODES , doc);
            setTimeout(() => {
              commit(type.IS_LOADING_EPISODES , false);
            }, 10000);
          }).catch((err) =>{
            console.log(err)
          });
      });
  },
  GET_GENRES({commit} , info){
    commit(type.IS_LOADING_GENRES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/genres/${info.genre}/${info.page}`)
      .then(res =>{
        let series = res.data.content.filter(doc => doc.type === 'serie');
        let movies = res.data.content.filter(doc => doc.type === 'pelicula');

        nSQL('gseries')
          .query('upsert' , series)
          .exec()     
          .then(doc =>{
            commit(type.SET_GENRES , doc);
            setTimeout(() => {
              commit(type.IS_LOADING_GENRES , false);
            }, 10000);
          })
      
        nSQL('gmovies')
          .query('upsert' , movies)
          .exec()     
          .then(doc =>{
            commit(type.SET_GENRES , doc);
            setTimeout(() => {
              commit(type.IS_LOADING_GENRES , false);
            }, 11000);
          })
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_VIDEO_GSERIES({commit} , id){
    commit(type.IS_LOADING_GENRES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/video_serie/${id}`)
      .then(doc =>{
        commit(type.SET_VIDEO_GENRE_SERIE_VIDEO , doc.data.video_iframe);
        setTimeout(() => {
          commit(type.IS_LOADING_GENRES , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
  GET_VIDEO_GMOVIES({commit} , id){
    commit(type.IS_LOADING_GENRES , true);
    axios.get(`https://cinemanight.chrismichael.now.sh/api/v1/video_movie/${id}`)
      .then(doc =>{
        commit(type.SET_VIDEO_GENRE_MOVIE_VIDEO , doc.data.video_iframe);
        setTimeout(() => {
          commit(type.IS_LOADING_GENRES , false)
        } , 1000)
      }).catch(err =>{
        console.error(err);
      });
  },
};
