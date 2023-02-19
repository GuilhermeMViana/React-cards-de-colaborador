import './TextForm.css'

const TextForm = (props) => {
    return (
        <div className='campo-texto'>
                <label for="">{props.label}</label>
                <input required={props.isRequired} type="text" placeholder={props.placeholder} id="nome"></input>
        </div>
    )
}

export default TextForm