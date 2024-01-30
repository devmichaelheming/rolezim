import { create } from "zustand";
import { ItemProps } from "~/Models";

export interface IUser {
  id: string;
  email: string;
}

export interface useAuthStoreProps {
  event: ItemProps | null;
  selectedEvent: (event: ItemProps) => void;
}

const useEventStore = create<useAuthStoreProps>((set) => ({
  event: null,
  selectedEvent: (event) => set({ event }),
}));

export default useEventStore;
