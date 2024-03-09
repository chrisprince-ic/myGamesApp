import "../index.css";
const menuItems = ["Home", "About"];
function Header() {
  return (
    <header>
      <nav className="navigation">
        <h1>ChrisEries</h1>
        <div className="menuItems">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {menuItems.map((menuItem) => (
            <li key={menuItem}>{menuItem}</li>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
