import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "courses", label: "Courses" },
  { id: "learning", label: "My learning" },
];

function Navbar({ studentName }) {
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveSection(topMost.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleNavClick(id) {
    setActiveSection(id);
  }

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__mark" aria-hidden="true">☾</span>
        <span className="navbar__name">EduNIGHT</span>
      </div>

      <nav className="navbar__links" aria-label="Primary">
        {SECTIONS.map((section) => (
          
            key={section.id}
            href={`#${section.id}`}
            onClick={() => handleNavClick(section.id)}
            className={`navbar__link${
              activeSection === section.id ? " navbar__link--active" : ""
            }`}
            aria-current={activeSection === section.id ? "page" : undefined}
          >
            {section.label}
          </a>
        ))}
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