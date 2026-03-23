import { createContext } from "react";
import type User from "../types/User";

interface AuthContextValue{
    user : User | undefined;
    setUser : (user: User | undefined)=> void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)