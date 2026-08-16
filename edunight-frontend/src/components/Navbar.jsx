function Navbar({ studentName }) {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__mark" aria-hidden="true">☾</span>
        <span className="navbar__name">EduNIGHT</span>
      </div>

      <nav className="navbar__links" aria-label="Primary">
        <a href="#dashboard" className="navbar__link navbar__link--active">
          Dashboard
        </a>
        <a href="#courses" className="navbar__link">
          Courses
        </a>
        <a href="#learning" className="navbar__link">
          My learning
        </a>
      </nav>

      <div className="navbar__student">
        <div className="navbar__avatar" aria-hidden="true">
          {studentName.charAt(0)}
        </div>
        <span className="navbar__student-name">{studentName}</span>
      </div>
    </header>
  );
}

export default Navbar;
