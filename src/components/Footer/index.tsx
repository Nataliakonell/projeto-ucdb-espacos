import './styles.css';
import facebookIcon from '../../assets/facebook.png'
import instagramIcon from '../../assets/instagram.png'
import youtubeIcon from '../../assets/youtube.png'
import linkedinIcon from '../../assets/linkedin.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="icons-footer">
                <a
                    href="https://business.facebook.com/business/loginpage/?next=https%3A%2F%2Fbusiness.facebook.com%2F%3Fnav_ref%3Dbiz_unified_f3_login_page_to_mbs&login_options%5B0%5D=FB&login_options%5B1%5D=IG&login_options%5B2%5D=SSO&config_ref=biz_login_tool_flavor_mbs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <img src={facebookIcon} alt="Facebook" />
                </a>

                <a
                    href="https://www.instagram.com/ucdb/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={instagramIcon} alt="Instagram" />
                </a>

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