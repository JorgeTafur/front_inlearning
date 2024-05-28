import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import CrearCurso from "./components/CrearCurso.vue";
import EditarCurso from "./components/EditarCurso.vue";
import ListarCursos from "./components/ListarCursos.vue";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

// views

import Index from "@/views/Index.vue";

// routes

const routes = [
  {
    path: "/",
    component: Index,
    meta: { redirectToCourses: true }
  },
  {
    path: "/crearCurso",
    name: "CrearCurso",
    component: CrearCurso,
  },
  {
    path: "/editarCurso/:id",
    name: "EditarCurso",
    component: EditarCurso,
  },
  {
    path: "/listarCursos",
    name: "ListarCursos",
    component: ListarCursos,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.redirectToCourses) {
    next('/listarCursos');
  } else {
    next();
  }
});

createApp(App).use(router).mount("#app");
