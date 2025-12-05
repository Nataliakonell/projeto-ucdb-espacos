import './styles.css'
export default function MapUcdb() {
    return (
        <div className="maps-section">

            <div className="map-container">
                <h2>Endereço</h2>
                <iframe src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.38992901228!2d-54.6214589258798!3d-20.408028981090453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7f91ebf9cf9%3A0xef64075c972d1a78!2sUniversidade%20Cat%C3%B3lica%20Dom%20Bosco!5e0!3m2!1spt-BR!2sbr!4v1763850117134!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </div>
            <p className="address-text">Endereço: Avenida Tamandaré, 6000 – Jardim Seminário Campo Grande</p>
        </div>
    );
}