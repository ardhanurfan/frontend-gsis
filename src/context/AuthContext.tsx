import { useState, createContext, ReactNode } from "react";

export interface User {
    "id": number,
    "name": string,
    "email": string,
    "university": string,
    "major": string,
    "year": string,
    "username": string,
    "phone": string,
    "role": string,
    "email_verified_at": null,
    "two_factor_confirmed_at": null,
    "current_team_id": null,
    "profile_photo_path": null,
    "created_at": string,
    "updated_at": string,
    "profile_photo_url": string,
}

export type AuthTypeContext = {
    user: User | null;
    updateUser(user: User) : void;
}

export const AuthContext = createContext<AuthTypeContext | null>(null);

const AuthProvider = ({children} : {children: ReactNode}) => {
    const [ user, setUser] = useState<User | null>(null);

    const updateUser = (user: User) => {
        setUser(user);
    }
    
    return <AuthContext.Provider value={{user, updateUser}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;