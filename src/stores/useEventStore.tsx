import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { ItemProps } from "~/Models";

export interface IUser {
  id: string;
  email: string;
}

export interface useAuthStoreProps {
  event: ItemProps | null;
  selectedEvent: (event: ItemProps) => void;
  favoriteEvents: Array<ItemProps>;
  addEventToFavorites: (events: ItemProps) => void;
  removeEventToFavorites: (id: string) => void;
  loadFromStorageFavorite: () => Promise<void>;
}

const useEventStore = create<useAuthStoreProps>((set, getState) => ({
  event: null,
  selectedEvent: (event) => set({ event }),

  favoriteEvents: [],

  addEventToFavorites: (event: ItemProps) => {
    set((state) => ({
      favoriteEvents: [...state.favoriteEvents, event],
    }));

    saveFavoriteEvents([...getState().favoriteEvents]);
  },
  removeEventToFavorites: (id: string) => {
    set((state) => ({
      favoriteEvents: state.favoriteEvents.filter((event) => event.id !== id),
    }));

    saveFavoriteEvents(getState().favoriteEvents.filter((event) => event.id !== id));
  },
  loadFromStorageFavorite: async () => {
    try {
      const storedFavoriteEvents = await AsyncStorage.getItem("@FavoriteEvents");

      if (storedFavoriteEvents) {
        const parsedFavoriteEvents = JSON.parse(storedFavoriteEvents);

        set({ favoriteEvents: parsedFavoriteEvents });
      }
    } catch (error: any) {
      console.log("Error loading favorite events", error);
    }
  },
}));

const saveFavoriteEvents = async (favoriteEvents: ItemProps[]) => {
  try {
    AsyncStorage.setItem("@FavoriteEvents", JSON.stringify(favoriteEvents));
  } catch (error: any) {
    console.log("Error saving favorite events", error);
  }
};

export default useEventStore;
