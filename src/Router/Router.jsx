import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Features from "../Pages/Features/Features";
import About from "../Pages/About/About";
import Form from "../Form/Form.jsx";
import Resume from "../Componets/Resume.jsx";
import Login from "../Pages/Auth/Login.jsx"
import Register from "../Pages/Auth/Registration.jsx"

// Routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "about",
        element: <About />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

export default router;
