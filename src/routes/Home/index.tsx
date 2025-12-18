import './styles.css'
import ucdbbanner from '../../assets/ucdb-banner.jpg'
import Footer from '../../components/Footer'
import Lupa from '../../assets/search.png'
import ucdblogo from '../../assets/logo-ucdb.png'
import "../../App.css"
import SpaceCardPatio from '../SpaceCardPatio'

export default function Home() {
    return (
        <>      
        <nav className="banner">
            <div className="logo-ucdb-left">
                <img src={ucdblogo} alt="UCDB" />
            <div className="span">
            <span>Espaços</span>
            </div>
            </div>        
            <div className="img-banner">
                <img src={ucdbbanner} alt="UCDB Banner" />
            </div>
            <div className="title">
                <h1>A UCDB é o lugar certo para o seu evento acontecer</h1>
                <div className="paragraph">
                    <p>Mais de 200 opções exclusivas para seus eventos, Reuniões e Treinamentos</p>
                </div>
            </div>
        </nav>

            <div className="selection">
                <div>
                    
                    <div className="selection-box">
                        <ul className='grups-box'>
                        <li className="box">Sala de Aula</li>
                        <li className="box">Auditório</li>
                        <li className="box">Sala de reunião</li>
                        <li className="box">Ginásio</li>
                        <li className="box">Paróquia</li>
                        <li className="box">Espaço de eventos</li>
                        <li className="box">Laboratório</li>
                        <li className="box">Não sei</li>
                    </ul>
                    <div className="comodidade-container">
                        <ul className="comodidade-box">
                            <li className="wifi"> <input type="checkbox" className="small-checkbox" /> Wi-Fi</li>
                            <li><input type="checkbox" className="small-checkbox" /> Ar Condicionado</li>
                            <li><input type="checkbox" className="small-checkbox" /> Projetor</li>
                        </ul>
                        <div className="max-capacity">
                            <span>Capacidade Máxima</span>
                            <input type="number" />
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Buscar..." />
                            <img src={Lupa} alt="Lupa" />
                            <div className="img-search"></div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <h2 className="espaco-title">Espaços disponíveis</h2>
            <SpaceCardPatio />
        <Footer />
        </>

    )
}