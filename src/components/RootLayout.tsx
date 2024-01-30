import type { PropsWithChildren } from "react";

function RootLayout(props: PropsWithChildren) {
  return <div className="p-3 h-[100vh]">{props.children}</div>;
}

export default RootLayout;
