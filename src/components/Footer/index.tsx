import './styles.css';
import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import youtubeIcon from '../../assets/youtube.png'
import linkedinIcon from  '../../assets/linkedin.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="icons-footer">
                <img src={facebookIcon} alt="Facebook" />
                <img src={instagramIcon} alt="Instagram" />
                <img src={youtubeIcon} alt="YouTube" />
                <img src={linkedinIcon} alt="LinkedIn" />
            </div>
            <div className="footer-content">
                <p>Av. Tamandaré, 6000 - Jardim Seminário - Campo Grande/MS - 79117-900</p>
                <p>Telefone: 67 - 3312.3300 / 3312.3800</p>
            </div>
        </footer>
    )
}