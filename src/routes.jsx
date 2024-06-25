import App from './App.jsx'
import Profile from "./components/Profile.jsx";
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
  ];
  
  export default routes;