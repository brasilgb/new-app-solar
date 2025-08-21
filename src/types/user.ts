interface SignInProps {
    cpfcnpj: string;
}

interface CheckPasswordProps {
    cpfcnpj: string;
    senha: string;
    deviceId: string;
}

interface UserProps {
    cpfcnpj: string
    nomeCliente: string
    codigoCliente: string
    token: string
    connected: boolean
}

interface AuthContextData {
    user: UserProps
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    loading: boolean
    signIn: (data: SignInProps) => Promise<void>
    checkPassword: (data: CheckPasswordProps) => Promise<void>
    signOut: () => void
}

export { SignInProps, CheckPasswordProps, UserProps, AuthContextData }