import { useEffect, useState } from 'react';
import Reloj from './Reloj';
import ListaInstantes, { type Instante } from './ListaInstantes';

const CLAVE_INSTANTES = 'diri-reloj-instantes';

export default function App() {
  // La lista se mantiene aquí, ya que se usa desde el botón del reloj y el historial.
  const [instantes, setInstantes] = useState<Instante[]>(() => {
    try {
      const guardados = localStorage.getItem(CLAVE_INSTANTES);
      const datos: unknown = guardados === null ? [] : JSON.parse(guardados);
      if (!Array.isArray(datos)) return [];

      return datos.flatMap((dato) => {
        if (!Number.isInteger(dato?.id) || typeof dato.fecha !== 'string') return [];

        const fecha = new Date(dato.fecha);
        return Number.isNaN(fecha.getTime()) ? [] : [{ id: dato.id, fecha }];
      });
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_INSTANTES, JSON.stringify(instantes));
    } catch {
      // El historial sigue disponible en memoria si falla el almacenamiento.
    }
  }, [instantes]);

  function guardarInstante(fecha: Date) {
    setInstantes((anteriores) => [
      { id: anteriores.length ? anteriores[0].id + 1 : 1, fecha },
      ...anteriores,
    ]);
  }

  return (
    <main className="contenedor">
      <header className="pagina-cabecera">
        <span className="marca">DIRI / SESIÓN 02</span>
        <h1>Mi reloj</h1>
        <p>Un reloj sencillo para guardar momentos del día.</p>
      </header>
      <Reloj onGuardar={guardarInstante} />
      <ListaInstantes instantes={instantes} />
      <footer>José Luis Mas García · AO 2.5</footer>
    </main>
  );
}
