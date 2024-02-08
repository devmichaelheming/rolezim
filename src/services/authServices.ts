import {
  signInWithEmailAndPassword,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { VerifyErroCode } from "../utils/verifyCodeError";
import { IUser } from "~/stores/useAuthStore";
import { auth } from "./firebaseConfig";
import { Alert } from "react-native";

export interface AuthResponse {
  user: IUser;
}

async function signIn(email: string, password: string): Promise<IUser | null> {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const user: User = userCredential.user;

      const auth: IUser = {
        id: user.uid,
        email: user.email || "",
      };

      return auth;
    })
    .catch((error) => {
      console.log("error service", error);

      const errorCode = error.code;
      let errorMessage = VerifyErroCode(errorCode);

      if (errorMessage == null) {
        errorMessage = error.message;
      }

      Alert.alert(errorMessage);

      return null;
    });
}

async function signUp(email: string, password: string): Promise<IUser | null> {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const user: User = userCredential.user;

      const auth: IUser = {
        id: user.uid,
        email: user.email || "",
      };

      return auth;
    })
    .catch((error) => {
      console.log("error service", error);

      const errorCode = error.code;
      let errorMessage = VerifyErroCode(errorCode);

      if (errorMessage == null) {
        errorMessage = error.message;
      }

      Alert.alert(errorMessage);

      return null;
    });
}

async function signOutService() {
  return await signOut(auth)
    .then(() => {
      console.log("deslogou");
      return true;
    })
    .catch((error) => {
      console.log("error service", error);
      return false;
    });
}

export const authService = { signIn, signUp, signOutService };
