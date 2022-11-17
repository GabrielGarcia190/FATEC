import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/', 
    name: "Home",
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/about', 
    name: "About",
    component: () => import('../components/About.vue'),
  },
  {
    path: '/products', name: "Product",
    component: () => import("../components/product/Index.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
