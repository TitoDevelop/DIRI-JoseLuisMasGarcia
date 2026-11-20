import Header from './components/Header';
import Content from './components/Content';

// Componente principal: ahora es funcional y utiliza dos subcomponentes.
function TaskLogging() {
  return (
    <div className="notificationsFrame">
      <div className="panel">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default TaskLogging;
