import { useState } from 'react';
import { Banner } from './components/Banner/Banner';
import { Form } from './components/Form/Form';
import { Team } from './components/Team/Team';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Corinthians',
      firstColor: '#000',
      secondColor: '#a0a0a0'
    },
    {
      nome: 'São Paulo',
      firstColor: '#ff0000',
      secondColor: '#ffaaaa'
    },
    {
      nome: 'Cuiabá',
      firstColor: '#01990e',
      secondColor: '#aaeeaa'
    },
    {
      nome: 'Cruzeiro',
      firstColor: '#001aff',
      secondColor: '#aaaaee'
    },
    {
      nome: 'Atlético-MG',
      firstColor: '#1b1b1b',
      secondColor: '#b0b0b0'
    },
    {
      nome: 'Fluminense',
      firstColor: '#600000',
      secondColor: '#d77777'
    },
    {
      nome: 'Criciúma',
      firstColor: '#ffdd00',
      secondColor: '#ffddbb'
    }
  ])

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorCadastrado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  }

  const deletarJogador = () => {
    console.log('Deletando jogador');
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.secondColor = cor;
      }
      return time;
    }));
  }

  const mudarCorDoCard = (cor, nome) => {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.firstColor = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form  team_names={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorCadastrado(jogador)} />
      
      {times.map(time => <Team 
                            key={time.nome} 
                            team_name={time.nome}
                            background_color={time.secondColor}
                            card_color={time.firstColor}
                            jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
                            aoDeletar={deletarJogador}
                            mudarCorDoTime = {mudarCorDoTime}
                            mudarCorDoCard = {mudarCorDoCard} />)}
    </div>
  );
}

export default App;
