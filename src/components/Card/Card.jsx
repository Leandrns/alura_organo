import './Card.css'
import { IoMdCloseCircle } from 'react-icons/io'

export const Card = (props) => {
    return (
        <div className='card'>
            <IoMdCloseCircle className='delete' onClick={props.aoDeletar} />
            <div className='card-header' style={{ backgroundColor: props.color }}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='card-footer'>
                <h4 className='name'>{props.name}</h4>
                <h4 className='number' style={{ color: props.color }}>{props.number}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}