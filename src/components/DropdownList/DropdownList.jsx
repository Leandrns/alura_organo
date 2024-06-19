import './DropdownList.css';

export const DropdownList = (props) => {
    return (
        <div className='dropdown-list'>
            <label htmlFor="">{props.label}</label>
            <select 
                onChange={event => props.aoAlterado(event.target.value)} 
                value={props.value} 
                required={props.required}>
                <option value="" disabled>Selecione uma opção</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}