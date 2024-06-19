import './Card.css'

export const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-header' style={{ backgroundColor: props.color }}>
                <img src={props.image} alt="Leandro Souza" />
            </div>
            <div className='card-footer'>
                <h4 className='name'>{props.name}</h4>
                <h4 className='number' style={{ color: props.color }}>{props.number}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}