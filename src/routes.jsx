import App from './App.jsx'
import Profile from "./components/Profile.jsx";
import Recipes from "./components/Recipes.jsx";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "profile",
        element: <Profile />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
    {
        path: "recipes",
        element: <Recipes />,
    },
    {
        path: "recipes/:recipe",
        element: <Recipes />
    }
  ];
  
  export default routes;