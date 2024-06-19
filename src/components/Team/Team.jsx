import { Card } from '../Card/Card';
import './Team.css';

export const Team = (props) => {
    return (
        props.jogadores.length > 0 ?
        <section className='team' style={{ backgroundColor: props.background_color }}>
            <h3 style={{ borderColor: props.card_color }}>{props.team_name}</h3>
            <div className='cards'>
                {props.jogadores.map(jogador => <Card
                                                key={jogador.nome}
                                                image={jogador.imagem}
                                                name={jogador.nome}
                                                number={jogador.numero}
                                                position={jogador.posicao}
                                                color={props.card_color} />)}
            </div>
        </section>
        : <p className='mensagem'>Os jogadores do <b>{props.team_name}</b> aparecerão aqui...</p>
    )
}