import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";

import { useCountAtom } from "../store";

function CounterPage() {
  const [count, setCount] = useCountAtom();

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-3"></div>
      <h1>COUNTER PAGE</h1>
      <Card className="max-w-72">
        <CardHeader className="justify-between">
          <h2 className="text-xl">Counter</h2>
        </CardHeader>
        <CardBody>
          <p className="text-5xl m-auto">{count}</p>
        </CardBody>
        <CardFooter className="justify-center gap-3">
          <ButtonGroup>
            <Button color="danger" onClick={handleDecrement}>
              -1
            </Button>
            <Button color="success" onClick={handleIncrement}>
              +1
            </Button>
          </ButtonGroup>
          <Button variant="light" color="danger" onClick={handleReset}>
            Reset
          </Button>
        </CardFooter>
      </Card>
      <Button href="/" as={Link} color="primary">
        back to home
      </Button>
    </div>
  );
}

export default CounterPage;
