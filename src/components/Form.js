function Form () {

    const cadastrarUsuario = (e) => {
        e.preventDefault()
        console.log("Usuario cadastrado")
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form