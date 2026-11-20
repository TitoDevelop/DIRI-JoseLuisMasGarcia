function Header() {
  return (
    <div className="header">
      <div className="menuIcon" aria-hidden="true">
        <div className="dashTop"></div>
        <div className="dashBottom"></div>
        <div className="circle"></div>
      </div>
      <h1>Registro de Tareas</h1>
      <div className="searchBox">
        <input
          type="text"
          className="searchInput"
          placeholder="Buscar ..."
          aria-label="Buscar tareas"
        />
        <div className="fa fa-search searchIcon" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default Header;
