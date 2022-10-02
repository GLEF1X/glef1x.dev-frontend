import { createBrowserRouter } from "react-router-dom";
import { HelloWorld } from "./routes/index.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloWorld />,
  },
]);
