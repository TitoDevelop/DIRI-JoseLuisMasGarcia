import { useState } from 'react';
import Reloj from './components/Reloj';
import ListaInstantes, { type Instante } from './components/ListaInstantes';

export default function App() {
  // La lista se mantiene aquí, ya que se usa desde el botón del reloj y el historial.
  const [instantes, setInstantes] = useState<Instante[]>([]);

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
      <footer>José Luis Mas García · AC 2.4</footer>
    </main>
  );
}
