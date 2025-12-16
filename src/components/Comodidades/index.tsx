import "./styles.css";

export type Comodidade = {
  id: number;
  label: string;
  icon: string;
};

type ComodidadesProps = {
  comodidades: Comodidade[];
};

export default function Comodidades({ comodidades }: ComodidadesProps) {
  return (
    <section className="comodidades">
      <h2>Comodidades</h2>

      <div className="comodidades-grid">
        {comodidades.map(item => (
          <div key={item.id} className="comodidade-item">
            <img
              src={item.icon}
              alt={item.label}
              className="comodidade-icon"
            />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
