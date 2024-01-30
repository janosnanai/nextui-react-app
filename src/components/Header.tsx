import type { Key } from "react";

import { Badge, Tab, Tabs } from "@nextui-org/react";
import { useRouter } from "@tanstack/react-router";

import { useCountAtom } from "../store";

function Header() {
  const router = useRouter();
  const pathname = router.state.location.pathname;
  const navigate = router.navigate;

  const [count] = useCountAtom();

  function getBadgeContent() {
    if (count <= 0) {
      return;
    }
    if (count <= 9) {
      return count.toString();
    }
    return "9+";
  }

  function handleSelectionChange(s: Key) {
    navigate({ to: s.toString() });
  }

  return (
    <Tabs
      selectedKey={pathname}
      onSelectionChange={handleSelectionChange}
      variant="underlined"
    >
      <Tab key="/" title="home" />

      <Tab
        key="/other-page"
        title={
          <Badge color="primary" content={getBadgeContent()}>
            <div>counter</div>
          </Badge>
        }
      />
    </Tabs>
  );
}

export default Header;
