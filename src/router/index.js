import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HtmlView from '../views/HtmlView.vue';
import CssView from '../views/CssView.vue';
import JsView from '../views/JsView.vue';
import QuizView from '../views/QuizView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/html',
    name: 'html',
    component: HtmlView
  },
  {
    path: '/css',
    name: 'css',
    component: CssView
  },
  {
    path: '/js',
    name: 'js',
    component: JsView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  },
  // Resto de tus rutas
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

