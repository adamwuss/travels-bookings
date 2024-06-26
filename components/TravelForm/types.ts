import type { Travel } from "~/types";

export interface Props {
  travelToEdit: Travel | null;
}

export interface Emits {
  (e: "save", travel: Travel): void;
}
