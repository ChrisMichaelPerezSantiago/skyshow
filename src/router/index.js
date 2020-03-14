import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EpisodesVideo from '../views/EpisodesVideo';
import MovieVideo from '../views/MovieVideo';
import SeriesList from '../views/SeriesList';
import MoviesList from '../views/MoviesList';
import SearchContent from '../views/SearchContent';
import SEpisodesVideo from '../views/SEpisodesVideo';
import SMovieVideo from '../views/SMovieVideo';
import EpisodesList from '../views/EpisodesList';
import ExpEpisodeVideo from '../views/ExpEpisodeVideo';
import ByGenre from '../views/ByGenre';
import GEpisodesVideo from '../views/GEpisodesVideo';
import GMovieVideo from '../views/GMovieVideo';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/EpisodesVideo/:ID',
    name: 'EpisodesVideo',
    component: EpisodesVideo
  },
  {
    path: '/MovieVideo/:ID',
    name: 'MovieVideo',
    component: MovieVideo
  },
  {
    path: '/SeriesList',
    name: 'SeriesList',
    component: SeriesList
  },
  {
    path: '/MoviesList',
    name: 'MoviesList',
    component: MoviesList
  },
  {
    path: '/SearchContent',
    name: 'SearchContent',
    component: SearchContent
  },
  {
    path: '/SEpisodesVideo/:id',
    name: 'SEpisodesVideo',
    component: SEpisodesVideo
  },
  {
    path: '/SMovieVideo/:id',
    name: 'SMovieVideo',
    component: SMovieVideo
  },
  {
    path: '/EpisodesList',
    name: 'EpisodesList',
    component: EpisodesList
  },
  {
    path: '/ExpEpisodeVideo/:ID',
    name: 'ExpEpisodeVideo',
    component: ExpEpisodeVideo
  },
  {
    path: '/Genre/:genres',
    name: 'ByGenre',
    component: ByGenre,
  },
  {
    path: '/GEpisodesVideo/:ID',
    name: 'GEpisodesVideo',
    component: GEpisodesVideo
  },
  {
    path: '/GMovieVideo/:ID',
    name: 'GMovieVideo',
    component: GMovieVideo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
