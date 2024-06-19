import './Banner.css';
import organoImg from '../../assets/images/logo-organo.svg';

export const Banner = () => {
    return (
        <header className='banner'>
            <div className='slogan'>
                <img src={organoImg} alt="" />
                <p>Crie cards dos seus jogadores favoritos da Série A do Brasileirão</p>
            </div>
            <img src="https://1190sports.com/content/uploads/2020/02/logo-brasileirao-blanco.png" alt="" />
        </header>
    )
}
