import Header from './components/Header';
import Content from './components/Content';

function TaskLogging() {
  return (
    <main className="notificationsFrame">
      <div className="panel">
        <h1 className="pageTitle">Mi espacio</h1>
        <section className="section">
          <Header title="Registro de tareas" />
          <Content />
        </section>
        <section className="section">
          <Header title="Perfil" />
        </section>
        <section className="section">
          <Header title="Preferencias" />
        </section>
        <section className="section">
          <Header title="Chat" />
        </section>
      </div>
    </main>
  );
}

export default TaskLogging;
