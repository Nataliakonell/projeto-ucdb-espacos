
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
    <section className="spacecards">
      <h2>Space Cards</h2>

      <div className="spacecards-grid">
        {spaceCards.map(item => (
          <div key={item.id} className="spacecard-item">
            <img
              src={item.photo}
              alt={item.title}
              className="spacecard-photo"
            />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
