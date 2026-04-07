import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Features from "../pages/Features.jsx";
import About from "../pages/About.jsx";
import Form from "../features/resume/Form.jsx";
import Resume from "../components/resume/Resume.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Registration.jsx";

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
