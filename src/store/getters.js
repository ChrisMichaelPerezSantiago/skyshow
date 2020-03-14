const _ = require('lodash');

export const getters = {
  FILTER_SPESIFIC_DATA: (state) => (search) =>{
    console.log(search , ' from store/getter.js')
    return _.filter(state.search.data , (data) =>{
      console.log(data, ' results from store/getter.js')
      return _.method('email.match' , new RegExp(data.title));
    });
  }
};