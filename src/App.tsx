import { NextUIProvider, Button } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className="bg-black p-3 h-[100vh]">
        <div className="flex gap-3">
          <Button color="primary">hello</Button>
          <Button color="secondary">bello</Button>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
