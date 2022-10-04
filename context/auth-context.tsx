import { useRouter } from "next/router";
import { createContext, PropsWithChildren, useState } from "react";
import AuthService from "../src/api/auth.service";
import { User } from "../src/models/user-model";

interface Auth {
    user: User | null;
    isLoading: boolean;
    login: (user: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<Auth>({
    user: null,
    login: (user: User) => {},
    logout: () => {},
    isLoading: true,
});

export const AuthProvider = ({
    children,
}: PropsWithChildren<Record<never, never>>) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const login = (user: User) => {
        setUser(user);
        setIsLoading(false);
    };

    const logout = () => {
        AuthService.logout();
        setUser(null);
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
