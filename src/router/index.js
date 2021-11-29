import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';
import Courses from '../views/Courses.vue';
import CourseLesson from '../views/CourseLesson.vue';
import CourseDetails from '../views/CourseDetails.vue';
import CodeEditor from '../views/CodeEditor.vue';
import Blog from '../views/Blog.vue';
import { projectAuth } from '../firebase/config';

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser; //who is current user
  console.log('current user is :', user);

  if (!user) {
    next({ name: 'Login' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: requireAuth,
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
  },
  {
    path: '/lessons',
    name: 'CourseLesson',
    component: CourseLesson,
  },
  {
    path: '/details/:id',
    name: 'CourseDetails',
    component: CourseDetails,
    props: true,
  },
  {
    path: '/codeEditor',
    name: 'CodeEditor',
    component: CodeEditor,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
