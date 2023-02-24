import './TextForm.css'

const TextForm = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
                <label>{props.label}</label>
                <input value={props.valor} onChange={aoDigitado}  required={props.isRequired} type="text" placeholder={props.placeholder} id="nome"></input>
        </div>
    )
}

export default TextForm