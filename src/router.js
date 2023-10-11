import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import DetailPage from "./components/DetailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: HomePage },
    { paths: "/details/", redirect: "" },
    // {path:"/details/:id", component:DetailPage}
    {
      path: "/country/:countryName",
      component: DetailPage,
      name: "DetailPage",
    }, // Use a dynamic route parameter
  ],
});
export default router;
