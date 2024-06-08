import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import SearchByName from '../views/SearchByName.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByingredient from '../views/SearchByingredient.vue'
import Search from '../views/Search.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'

const routes = [
  {
    path: "/",   
    component:DefaultLayout,
    children:[
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name",
        name: "ByName",
        component: SearchByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byingredient",
        component: SearchByingredient ,
      },
      {
        path: "/meal/:idMeal",
        name: "MealDetails",
        component: MealDetails ,
      },
    ]
  },
  {
    path: "/guest",
    component:GuestLayout,

  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
