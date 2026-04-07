import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx"
import ResumeProvider from "./components/context/ResumeContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ResumeProvider>
        <RouterProvider router={router} />
      </ResumeProvider>
    </Provider>
  </StrictMode>,
);
