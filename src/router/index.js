import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TriangleHeader from '../views/TriangleHeader/index';
import ProjectRed from '../views/ProjectRed/index';
import SocialCube from '../views/SocialCube/index';
import SvgMap from '../views/SvgMap/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/header',
    name: 'TriangleHeader',
    component: TriangleHeader,
  },
  {
    path: '/red',
    name: 'ProjectRed',
    component: ProjectRed,
  },
  {
    path: '/cube',
    name: 'SocialCube',
    component: SocialCube,
  },
  {
    path: '/map',
    name: 'SvgMap',
    component: SvgMap,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
