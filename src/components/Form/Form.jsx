import './Form.css';
import { Input } from '../Input/Input';
import { DropdownList } from '../DropdownList/DropdownList';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const Form = (props) => {
    
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')
    const [posicao, setPosicao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoJogadorCadastrado({
            nome,
            numero,
            posicao,
            imagem,
            time
        });
        setNome('');
        setNumero('');
        setPosicao('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card dos seus jogadores</h2>
                <Input
                    label="Nome"
                    required={true}
                    placeholder="Digite o nome do jogador" 
                    value={nome}
                    aoAlterado={value => setNome(value)} />
                <Input
                    label="Número" 
                    required={true} 
                    placeholder="Digite o número do jogador"
                    value={numero}
                    aoAlterado={value => setNumero(value)} />
                <Input 
                    label="Posição" 
                    required={true} 
                    placeholder="Digite a posição do jogador"
                    value={posicao}
                    aoAlterado={valor => setPosicao(valor)} />
                <Input 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    aoAlterado={value => setImagem(value)} />
                
                <DropdownList 
                    label="Time" 
                    itens={props.team_names}
                    required={true}
                    value={time}
                    aoAlterado={value => setTime(value)} />
                    
                <Button>Criar card</Button>
            </form>
        </section>
    )
}