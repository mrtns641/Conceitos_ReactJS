import { useState } from 'react';

function Form () {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const cadastrarUsuario = (e) => {
        e.preventDefault()
        console.log(`Usuário ${name}, com a senha ${password}`)
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form