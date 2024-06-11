import Sialo from "@/Components/Sialo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const loggedInAuth = (Component: any) => {
    // if already login protect the route
    const AuthenticatedComponent = () => {
        const router = useRouter();
        const token = useSelector((state: any) => state.login.token)

        useEffect(() => {
            if (!token) {
                return
            }
            router.push('/');
        }, []);

        return token ? <Sialo /> : <Component />; // Render whatever you want while the authentication occurs
    };
    return AuthenticatedComponent;
}