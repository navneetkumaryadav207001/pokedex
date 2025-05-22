// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Menu from "./components/pages/Menu";
import Help from "./components/pages/Help"
import About from "./components/pages/About"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Menu /> },
      {path:"help", element:<Help></Help>},
      {path:"about", element:<About></About>},
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
