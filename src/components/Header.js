import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
    return(
        <header>
            <div className='header'>
                <div className='header-title'>
                    <img className='lmj-logo' src={logo} alt='la maison jungle'/>
                    <h1>La maison jungle</h1>
                </div>
            <p className='header-slogan'>la nature à porté de doights</p>
            </div>
        </header>
    );
}

export default Header