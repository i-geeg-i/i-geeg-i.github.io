import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/index";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Portfolio from "./routes/protfolio";
import Contacts from "./routes/contacts";
import Comics from "./routes/comics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/comics",
    element: <Comics />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);