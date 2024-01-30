import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { authService } from "../services/authServices";

export interface IUser {
  id: string;
  email: string;
}

export interface useAuthStoreProps {
  user: IUser | null;
  signIn: (email: string, password: string) => Promise<IUser | null>;
  signUp: (email: string, password: string) => Promise<IUser | null>;
  signOut: () => void;
}

const useAuthStore = create<useAuthStoreProps>((set) => ({
  user: null,
  signIn: async (email: string, password: string) => {
    try {
      const auth = await authService.signIn(email, password);

      set({ user: auth });

      AsyncStorage.setItem("@AuthData", JSON.stringify(auth));

      return auth;
    } catch (error: any) {
      console.log("error", error);

      return null;
    }
  },
  signUp: async (email: string, password: string) => {
    try {
      const auth = await authService.signUp(email, password);

      set({ user: auth });

      AsyncStorage.setItem("@AuthData", JSON.stringify(auth));

      return auth;
    } catch (error: any) {
      console.log("error", error);

      return null;
    }
  },
  signOut: () => {
    set({ user: null });
    AsyncStorage.removeItem("@AuthData");
  },

  loadFromStorage: async () => {
    const auth = await AsyncStorage.getItem("@AuthData");

    if (auth) {
      set({ user: JSON.parse(auth) });
    }
  },
}));

export default useAuthStore;
