import '../styles/Footer.css';
import whatsap from '../assets/whatsap-logo.png';
import facebook from '../assets/facebook-logo.jpeg';
import email from '../assets/email-logo.jpeg';

function Footer() {
    return(
        <footer>
            <h2>REJOIGNEZ NOUS</h2>
            <div className='social-networks'>
                <a href='https://wa.me/message/DSBSTZI4RLSNL1'><img className='footer-sn' src={whatsap} alt='whatsap'/></a>
                <a href='https://www.facebook.com'><img className='footer-sn' src={facebook} alt='facebook'/></a>
                <a href='mailto:temgoua484@gmail.com'><img className='footer-sn' src={email} alt='email'/></a>
            </div>
        </footer>
    );
}

export default Footer