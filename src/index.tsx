import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import routes from "./routes";
import AuthContextProvider from "./store/authContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/main.scss";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <RouterProvider router={routes} />
      <ToastContainer />
    </AuthContextProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
