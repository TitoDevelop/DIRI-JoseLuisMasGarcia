import { useEffect, useState } from 'react';

interface RelojProps {
  onGuardar: (fecha: Date) => void;
}

function dosDigitos(valor: number): string {
  return String(valor).padStart(2, '0');
}

// El propio reloj lleva el estado de la hora y actualiza ese estado cada segundo.
export default function Reloj({ onGuardar }: RelojProps) {
  const [ahora, setAhora] = useState<Date>(() => new Date());

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setAhora(new Date());
    }, 1000);

    // Evita dejar un intervalo funcionando si se desmonta el componente.
    return () => window.clearInterval(intervalo);
  }, []);

  const hora = `${dosDigitos(ahora.getHours())}:${dosDigitos(ahora.getMinutes())}:${dosDigitos(ahora.getSeconds())}`;

  return (
    <section className="reloj" aria-label="Reloj actual">
      <p className="eyebrow">HORA ACTUAL</p>
      <div className="hora" role="timer" aria-live="off">{hora}</div>
      <p className="fecha">{ahora.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <button className="guardar" onClick={() => onGuardar(new Date())}>
        + Guardar instante
      </button>
    </section>
  );
}
