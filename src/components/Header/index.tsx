import './styles.css';
import ucdblogo from '../../assets/logo-ucdb.png';


export default function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src={ucdblogo} alt="UCDB" />
        <div className="span">
            <span>Espaços</span>
            </div>
      </div>
    </header>
  );
}