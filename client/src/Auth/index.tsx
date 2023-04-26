import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import Sialo from '@/Components/Sialo';

const withAuth = (Component: any) => {
    const AuthenticatedComponent = () => {
        const router = useRouter();
        const user = useSelector((state: any) => state.login.user)


        useEffect(() => {
            if (!user) {
                router.push('/login');
            } else {
                router.push('/')
            }
        }, []);

        return !user ? <Sialo /> : <Component />; // Render whatever you want while the authentication occurs
    };

    return AuthenticatedComponent;
};

export default withAuth;