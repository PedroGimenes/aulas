import { useCallback, useMemo, useRef, useState } from 'react';
import { InputLogin } from './components/inputLogin';
import { ButtonLogin } from './components/ButtonLogin';
import { useUsuarioLogado } from '../../shared/hooks';

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const { nomeDoUsuario } = useUsuarioLogado();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email]);

    const handleEntrar = useCallback(() => {
    }, [email, password]);

    return (
        <div>
           <form>
             <p>Quantidade de caracteres no email {emailLength}</p>
             <p>{nomeDoUsuario}</p>

            <InputLogin 
                label="Email" 
                value={email} 
                onChange={newValue => setEmail(newValue)} 
                onPressEnter={() => inputPasswordRef.current?.focus()} 
            />

            <InputLogin 
                label="Senha" 
                type="password"
                value={password} 
                ref={inputPasswordRef}
                onChange={newValue => setPassword(newValue)}
            />        

            {/* <button type="button" onClick={handleEntrar}>
                Entrar
            </button> */}
            <ButtonLogin type="button" onClick={handleEntrar}>
                Entrar
            </ButtonLogin>

           </form>
        </div>
    );
}