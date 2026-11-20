import ActivityItem from './ActivityItem';

function Content() {
  return (
    <div className="content">
      <div className="line"></div>
      <ActivityItem
        nombreImagen="francisca"
        valorAlt="Francisca"
        hora="Hace una hora"
        descripcion="Fui a comer con amigos"
      />
      <ActivityItem
        nombreImagen="paco"
        valorAlt="Paco"
        hora="10:00 am"
        descripcion="Leí un artículo sobre tecnología"
      />
      <ActivityItem
        nombreImagen="quica"
        valorAlt="Quica"
        hora="10:00 am"
        descripcion="Escribí notas sobre un proyecto importante"
      />
      <ActivityItem
        nombreImagen="curro"
        valorAlt="Curro"
        hora="2:21 pm"
        descripcion="Preparé la presentación para la reunión de mañana"
      />
    </div>
  );
}

export default Content;
