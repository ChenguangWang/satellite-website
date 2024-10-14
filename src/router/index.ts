import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      children: [
        {
          path: "",
          redirect: "home",
        },
        {
          path: "home",
          name: "home",
          component: () => import("@/views/content/Main.vue"),
        },
        {
          path: "publications",
          name: "publications",
          component: () => import("@/views/content/Publications.vue"),
        },
        {
          path: "awards",
          name: "awards",
          component: () => import("@/views/content/Awards.vue"),
        },
        {
          path: "join-us",
          name: "joinUs",
          component: () => import("@/views/content/JoinUs.vue"),
        },
      ],
    },
  ],
});

export default router;
