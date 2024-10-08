import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from '../components/UserRegister.vue';
import UserLogin from '../components/UserLogin.vue';
import UserDashboard from '../components/UserDashboard.vue';
import UserProfile from '../components/UserProfile.vue';
import UserForgotPassword from '../components/UserForgotPassword.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/register', name: 'UserRegister', component: UserRegister },
  { path: '/login', name: 'UserLogin', component: UserLogin },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: UserDashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuth: true },
  },
  { path: '/forgot-password', name: 'UserForgotPassword', component: UserForgotPassword },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard to protect routes and redirect authenticated users away from login
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // If the route requires authentication and the user is not logged in
    if (token !== 'test-token-12345') {
      next({ path: '/login' });
    } else {
      next();
    }
  } else if (to.path === '/login' && token === 'test-token-12345') {
    // If user is already logged in, redirect away from login page
    next({ path: '/dashboard' });
  } else {
    next();
  }
});

export default router;
