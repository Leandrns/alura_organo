import './Input.css'

export const Input = (props) => {
    const label = props.label
    const placeholder = `${props.placeholder}...` //fstring em JS
    
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="input">
            <label htmlFor="">{label}</label>
            <input type="text" value={props.value} onChange={aoDigitado} required={props.required} placeholder={placeholder} />
        </div>
    )
}
