const Header = () => {
  const user = false;

  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul>
          {user ? (
            <>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
