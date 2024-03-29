import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/FavoritesPage"),
  },
  {
    path: "/myrecipes",
    name: "myrecipes",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/myfullrecipe",
    name: "myfullrecipe",
    component: () => import("./pages/MyFullRecipePage"),
  },
  {
    path: "/familyrecipes",
    name: "familyrecipes",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: "/familyfullrecipe",
    name: "familyfullrecipe",
    component: () => import("./pages/FamilyFullRecipePage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },

];

export default routes;
