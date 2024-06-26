import type { Travel } from "~/types";

export interface Props {
  travels: Travel[];
}

export interface Emits {
  (e: "edit", travel: Travel): void;
  (e: "delete", id: number): void;
}
