function Pessoa(props) {
    return(
    <div>
        <p>Nome: {props.nome}</p>
        <p>Idade: {props.idade}</p>
        <p>Profissão: {props.profissão}</p>
    </div>    
    )
}

export default Pessoa