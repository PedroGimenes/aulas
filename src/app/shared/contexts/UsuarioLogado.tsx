import { createContext, useCallback, useEffect, useState } from 'react';

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider = React.FC = ({children}) => {

    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome('Lucas');
        }, 300);
    }, []);

    const handleLogout = useCallback(() => {
        console.log('logout');
        
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Lucas', logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )

}