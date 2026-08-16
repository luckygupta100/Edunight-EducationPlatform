function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 5) return "Still up studying";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

function Hero({ studentName, streakDays, enrolledCount }) {
  return (
    <section className="hero" id="dashboard">
      <div className="hero__text">
        <p className="hero__eyebrow">{getGreeting()}</p>
        <h1 className="hero__title">
          Tonight's session, <span className="hero__title-accent">{studentName}</span>.
        </h1>
        <p className="hero__sub">
          You're partway through {enrolledCount} courses. Pick one up where you left off,
          or browse something new below.
        </p>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-value">{streakDays}</span>
          <span className="hero__stat-label">day streak</span>
        </div>
        <div className="hero__stat-divider" aria-hidden="true" />
        <div className="hero__stat">
          <span className="hero__stat-value">{enrolledCount}</span>
          <span className="hero__stat-label">in progress</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
