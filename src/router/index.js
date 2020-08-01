import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TrHeader from '../views/TriangleHeader/index';
import PrRed from '../views/PrRed/index';
import SoCube from '../views/SoCube/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/trHeader',
    name: 'TriangleHeader',
    component: TrHeader,
  },
  {
    path: '/prRed',
    name: 'ProjectRed',
    component: PrRed,
  },
  {
    path: '/SoCube',
    name: 'SocialCube',
    component: SoCube,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
