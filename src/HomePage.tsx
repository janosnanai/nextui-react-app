import { Link } from "@nextui-org/react";

function HomePage() {
  return (
    <div className="bg-black p-3 h-[100vh] space-y-3">
      <div className="flex gap-3">
        <Link href="/">home</Link>
        <Link href="/other-page">other page</Link>
      </div>
      <h1 className="text-white">OTHER PAGE</h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        cupiditate! Vero in nesciunt unde ducimus modi praesentium repellat
        sequi optio illum consequuntur, accusamus odit eius nostrum animi est et
        voluptates.
      </p>
    </div>
  );
}

export default HomePage;
