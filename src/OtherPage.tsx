import { Button, Link } from "@nextui-org/react";

function HomePage() {
  return (
    <div className="bg-black p-3 h-[100vh] space-y-3">
      <div className="flex gap-3">
        <Link href="/">home</Link>
        <Link href="/other-page">other page</Link>
      </div>
      <h1 className="text-white">HOME PAGE</h1>
      <div className="flex gap-3">
        <Button color="primary">hello</Button>
        <Button color="secondary">bello</Button>
      </div>
    </div>
  );
}

export default HomePage;
