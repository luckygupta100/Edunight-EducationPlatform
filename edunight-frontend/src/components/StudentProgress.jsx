import ConstellationRing from "./ConstellationRing";

function StudentProgress({ enrolledCourses, onSelectCourse }) {
  if (enrolledCourses.length === 0) {
    return null;
  }

  return (
    <section className="progress-section" id="learning" aria-label="My learning">
      <div className="section-heading">
        <h2>Continue where you left off</h2>
        <p>Each ring fills in as you complete lessons — full circle, course done.</p>
      </div>

      <div className="progress-scroller">
        {enrolledCourses.map(({ course, progress }) => (
          <button
            key={course.id}
            className="progress-card"
            onClick={() => onSelectCourse(course)}
          >
            <ConstellationRing progress={progress} />
            <div className="progress-card__text">
              <span className="progress-card__title">{course.title}</span>
              <span className="progress-card__meta">{course.instructor}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default StudentProgress;
