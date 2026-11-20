interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className="header">
      <div className="menuIcon" aria-hidden="true">
        <div className="dashTop"></div>
        <div className="dashBottom"></div>
        <div className="circle"></div>
      </div>
      <h2>{title}</h2>
      <div className="searchBox">
        <input
          type="text"
          className="searchInput"
          placeholder="Buscar ..."
          aria-label={`Buscar en ${title}`}
        />
        <span className="fa fa-search searchIcon" aria-hidden="true"></span>
      </div>
    </div>
  );
}

export default Header;
