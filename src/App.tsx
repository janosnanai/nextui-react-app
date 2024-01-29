// import { NextUIProvider, Button } from "@nextui-org/react";
import { useNavigate, RouterProvider } from "@tanstack/react-router";

import { router } from "./router";

function App() {
  // const navigate = useNavigate();

  return (
    // <NextUIProvider navigate={navigate}>
    // <NextUIProvider>
    <RouterProvider router={router} />
    // </NextUIProvider>
  );
}

export default App;
