import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import Models3D from "./pages/Models3D";
import Catalog from "./pages/Catalog";
import IndividFurnPage from "./pages/IndividFurnPage";
import Contacts from "./pages/Contacts";
import ShowRoom from "./pages/ShowRoom";
import { Dealers } from "./pages/Dealers";
// import NotFound from "./pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "Models3D",
        element: <Models3D />,
      },
      {
        path: "Catalog",
        element: <Catalog />,
      },
      {
        path: "Individual-Furniture",
        element: <IndividFurnPage />,
      },
      {
        path: "Contacts",
        element: <Contacts />,
      },
      {
        path: "Show-Room",
        element: <ShowRoom />,
      },
      {
        path: "Dealers",
        element: <Dealers />,
      },
    ],
  },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
]);

export default router;
