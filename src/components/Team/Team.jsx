import { Card } from '../Card/Card';
import './Team.css';

export const Team = (props) => {
    return (
        props.jogadores.length > 0 ?
        <section className='team' style={{ backgroundColor: props.background_color }}>
            <div className="color-input">
                <label htmlFor="">Cor de Fundo</label>
                <input value={props.background_color} onChange={event => props.mudarCorDoTime(event.target.value, props.team_name)} type="color" />
                <label htmlFor="">Cor do Card</label>
                <input value={props.card_color} onChange={event => props.mudarCorDoCard(event.target.value, props.team_name)} type="color" />
            </div>
            <h3 style={{ borderColor: props.card_color }}>{props.team_name}</h3>
            <div className='cards'>
                {props.jogadores.map(jogador => {
                    return <Card
                            key={jogador.nome}
                            image={jogador.imagem}
                            name={jogador.nome}
                            number={jogador.numero}
                            position={jogador.posicao}
                            color={props.card_color}
                            aoDeletar={props.aoDeletar} />
                    })}
            </div>
        </section>
        : <p className='mensagem'>Os jogadores do <b>{props.team_name}</b> aparecerão aqui...</p>
    )
}