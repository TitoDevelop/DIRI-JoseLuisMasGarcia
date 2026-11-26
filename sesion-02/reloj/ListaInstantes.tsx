export interface Instante {
  id: number;
  fecha: Date;
}

interface ListaInstantesProps {
  instantes: Instante[];
  onBorrar: (id: number) => void;
}

// Muestra los instantes y avisa a App cuando se pulsa Borrar.
export default function ListaInstantes({ instantes, onBorrar }: ListaInstantesProps) {
  return (
    <section className="historial" aria-label="Instantes guardados">
      <div className="historial-cabecera">
        <h2>Instantes guardados</h2>
        <span className="contador">{instantes.length}</span>
      </div>

      {instantes.length === 0 ? (
        <p className="vacio">Todavía no has guardado ninguna hora. Pulsa el botón del reloj para empezar.</p>
      ) : (
        <ol className="lista">
          {instantes.map((instante) => (
            <li key={instante.id}>
              <span className="numero">#{instante.id}</span>
              <span className="instante-hora">{instante.fecha.toLocaleTimeString('es-ES', { hour12: false })}</span>
              <span className="instante-fecha">{instante.fecha.toLocaleDateString('es-ES')}</span>
              <button
                type="button"
                className="borrar"
                aria-label={`Borrar instante ${instante.id}`}
                onClick={() => onBorrar(instante.id)}
              >
                Borrar
              </button>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
