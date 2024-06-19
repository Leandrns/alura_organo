import { useState } from 'react';
import { Banner } from './components/Banner/Banner';
import { Form } from './components/Form/Form';
import { Team } from './components/Team/Team';

function App() {

  const times = [
    {
      nome: 'Corinthians',
      firstColor: '#000',
      secondColor: '#00000030'
    },
    {
      nome: 'São Paulo',
      firstColor: '#ff0000',
      secondColor: '#ff000030'
    },
    {
      nome: 'Cuiabá',
      firstColor: '#01990e',
      secondColor: '#01990e40'
    },
    {
      nome: 'Cruzeiro',
      firstColor: '#001aff',
      secondColor: '#001aff28'
    },
    {
      nome: 'Atlético-MG',
      firstColor: '#1b1b1b',
      secondColor: '#1b1b1b30'
    },
    {
      nome: 'Fluminense',
      firstColor: '#600000',
      secondColor: '#60000030'
    },
    {
      nome: 'Criciúma',
      firstColor: '#ffdd00',
      secondColor: '#ffdd0030'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorCadastrado = (jogador) => {
    setJogadores([...jogadores, jogador]);
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
                            jogadores={jogadores.filter(jogador => jogador.time === time.nome)} />)}
    </div>
  );
}

export default App;
