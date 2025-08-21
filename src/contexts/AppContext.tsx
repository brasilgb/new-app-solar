import serviceapp from "@/services/serviceapp";
import { AuthContextData, SignInProps } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const storageUserKey = '@solar:user';

    useEffect(() => {
        const loadStorageData = async () => {
            setLoading(true);
            try {
                const storedUser = await AsyncStorage.getItem(storageUserKey);
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error("Falha ao carregar dados do storage", error);
            } finally {
                setLoading(false);
            };
        };
        loadStorageData();
    }, []);

    const signIn = async (cpfcnpj: SignInProps) => {
        setLoading(true);
        try {
            const response = await serviceapp.get(`(WS_LOGIN_APP)?cpfcnpj=${cpfcnpj}`);
            if (response.status !== 200) {

            }
            // router.push('/cashback');
            console.log(router.replace('/cashback'));
            
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        try {

        } catch (error) {

        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, setLoading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);