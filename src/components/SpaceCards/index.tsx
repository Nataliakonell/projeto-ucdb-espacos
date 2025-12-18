import "./styles.css"
export type SpaceCard = {
  id: number;
  photo: string;
  title: string;
  description: string;
};

type SpaceCardProps = {
  spaceCards: SpaceCard[];
};

export default function SpaceCards({ spaceCards }: SpaceCardProps) {
  return (

      <div className="spacecards-grid">
  {spaceCards.map(item => (
    <div key={item.id} className="spacecard-item">
      <img
        src={item.photo}
        alt={item.title}
        className="spacecard-photo"
      />

      <div className="spacecard-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
</div>

  );
}
