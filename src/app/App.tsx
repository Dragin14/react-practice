import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import Outfits from "../pages/outfits/Outfits";
import OutfitDetails from "../pages/outfit-details/OutfitDetails";
import Contacts from "../pages/contacts/Contacts";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/outfits",
    element: <Outfits />,
  },
  {
    path: "/outfits/:id",
    element: <OutfitDetails />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
