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
  signOut: () => Promise<void>;
  loadFromStorageAuth: () => Promise<void>;
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

      return auth;
    } catch (error: any) {
      console.log("error", error);

      return null;
    }
  },
  signOut: async () => {
    try {
      const auth = await authService.signOutService();

      if (auth) {
        set({ user: null });
        AsyncStorage.removeItem("@AuthData");
      }
    } catch (error: any) {
      console.log("error", error);
    }
  },

  loadFromStorageAuth: async () => {
    const auth = await AsyncStorage.getItem("@AuthData");

    if (auth) {
      set({ user: JSON.parse(auth) });
    }
  },
}));

export default useAuthStore;
