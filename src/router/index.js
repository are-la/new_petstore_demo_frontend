import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/category/:category",
    props: true,
    component: () => import("../views/Category.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router;