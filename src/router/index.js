import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import ItemDetailsView from '../views/ItemDetails.vue';
import NewItemView from '../views/NewItem.vue';
import LoginView from '../views/Login.vue';
import RegisterView from '../views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/item/:id',
    name: 'itemDetails',
    component: ItemDetailsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/new-item',
    name: 'newItem',
    component: NewItemView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Add navigation guard for authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
