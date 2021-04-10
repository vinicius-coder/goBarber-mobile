import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useEffect } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    userDTO: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    userDTO: object;
    signIn: (credentials: SignInCredentials) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);

    useEffect(() => {

        async function loadStorageData(): Promise<void> {
            const [token, userDTO] = await AsyncStorage.multiGet([
                '@GoBarber:token',
                '@GoBarber:user',
            ]);

            if (token[1] && userDTO[1]) {
                setData({ token: token[1], userDTO: JSON.parse(userDTO[1]) });
            }
        }

        loadStorageData();

    }, []);

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        const { token, userDTO } = response.data;

        await AsyncStorage.multiSet([
            ['@GoBarber:token', token],
            ['@GoBarber:user', JSON.stringify(userDTO)],
        ]);

        setData({ token, userDTO });
    }, []);

    const signOut = useCallback(async () => {

        await AsyncStorage.multiRemove([
            '@GoBarber:token',
            '@GoBarber:user'
        ]);

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ userDTO: data.userDTO, signIn, signOut }} >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;
}

export { AuthProvider, useAuth };