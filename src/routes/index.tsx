import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomeScreen, SignIn, Root } from "../pages";

export const path = {
  root: "/",
  signIn: "/signin",
  signUp: "/signup",
  home: "/home",
  tvshows: "/tvshows",
  movies: "/movies",
  newandpopular: "/newandpopular",
  mylist: "/mylist",
  browsebylanguage: "/browsebylanguage",
};

const routes = createBrowserRouter([
  { path: path.root, element: <Root />, errorElement: <ErrorPage /> },
  { path: path.signIn, element: <SignIn /> },
  { path: path.home, element: <HomeScreen /> },
]);

export default routes;
