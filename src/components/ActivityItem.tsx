interface ActivityItemProps {
  nombreImagen: string;
  valorAlt: string;
  hora: string;
  descripcion: string;
}

function ActivityItem({ nombreImagen, valorAlt, hora, descripcion }: ActivityItemProps) {
  return (
    <div className="item">
      <div className="avatar">
        <img alt={valorAlt} src={`/images/${nombreImagen}.jpg`} />
      </div>
      <span className="time">{hora}</span>
      <p>{descripcion}</p>
    </div>
  );
}

export default ActivityItem;
