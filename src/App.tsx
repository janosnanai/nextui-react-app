import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router";

function App() {
  function navigate(to: string) {
    router.navigate({ to });
  }

  return (
    <NextUIProvider navigate={navigate}>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
