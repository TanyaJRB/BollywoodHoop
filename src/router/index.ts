import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Gallery from "../components/Gallery.vue";
import Packages from "../components/Packages.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/packages",
    name: "Packages",
    component: Packages,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//   {
//     path: '/event/:id',
//     name: 'EventDetails',
//     props: true,
//     component: UserForm
//   },

export default router;
