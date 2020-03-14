const type = require('./types.js');


export const mutations = {
  [type.SET_ALL_SERIES](state , payload){
    state.series.data = payload;
  },
  [type.SET_VIDEO_SERIES](state , payload){
    state.series.video = payload;
  },
  [type.IS_LOADING_SERIES](state , payload){
    state.series.isLoading = payload;
  },
  [type.SET_ALL_MOVIES](state , payload){
    state.movies.data = payload;
  },
  [type.SET_VIDEO_MOVIES](state , payload){
    state.movies.video = payload;
  },
  [type.IS_LOADING_MOVIES](state , payload){
    state.movies.isLoading = payload;
  },
  [type.SET_SEARCH](state , payload){
    state.search.data = payload;
  },
  [type.IS_LOADING_SEARCH](state , payload){
    state.search.isLoading = payload;
  },
  [type.SET_VIDEO_SEARCH](state , payload){
    state.search.video = payload;
  },

  [type.SET_SEARCH_VIDEO_MOVIES](state , payload){
    state.search.mvideo = payload;
  },

  [type.SET_EPISODES](state , payload){
    state.episodes.data = payload;
  },
  [type.IS_LOADING_EPISODES](state , payload){
    state.episodes.isLoading = payload
  },
  [type.SET_EPISODE_VIDEO](state , payload){
    state.episodes.video = payload;
  },
  
  [type.SET_GENRES](state , payload){
    state.genres.data = payload;
  },
  [type.IS_LOADING_GENRES](state , payload){
    state.genres.isLoading = payload;
  },
  [type.SET_VIDEO_GENRE_SERIE_VIDEO](state , payload){
    state.genres.video = payload;
  },
  [type.SET_VIDEO_GENRE_MOVIE_VIDEO](state , payload){
    state.genres.mvideo = payload;
  }
};

