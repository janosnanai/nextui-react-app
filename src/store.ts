import { atom, useAtom } from "jotai";

const countAtom = atom(0);

export function useCountAtom() {
  return useAtom(countAtom);
}
