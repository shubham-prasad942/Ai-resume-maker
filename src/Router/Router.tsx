import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Features from "../Pages/Features/Features";
import About from "../Pages/About/About";
import  Form from "../Form/Form";
import Resume from "../Componets/Resume";

// Routers
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/resume",
        element: <Resume />,
      }
    ],
  },
]);
