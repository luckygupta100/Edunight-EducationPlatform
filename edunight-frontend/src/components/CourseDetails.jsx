import { useEffect } from "react";

function formatPrice(price) {
  return price === 0 ? "Free" : `₹${price}`;
}

function CourseDetails({ course, isEnrolled, onEnroll, onClose }) {
  // Close on Escape for keyboard users.
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="details-overlay" onClick={onClose}>
      <div
        className="details-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-details-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="details-panel__close" onClick={onClose} aria-label="Close course details">
          ×
        </button>

        <div
          className="details-panel__banner"
          style={{ "--course-color": course.color }}
          aria-hidden="true"
        >
          <span>{course.category}</span>
        </div>

        <div className="details-panel__content">
          <h2 id="course-details-title">{course.title}</h2>
          <p className="details-panel__instructor">Taught by {course.instructor}</p>

          <div className="details-panel__stats">
            <span>{course.duration}</span>
            <span aria-hidden="true">•</span>
            <span>{course.level}</span>
            <span aria-hidden="true">•</span>
            <span>{course.rating.toFixed(1)} ★ ({course.students.toLocaleString()} students)</span>
          </div>

          <p className="details-panel__description">{course.description}</p>

          <h3 className="details-panel__subheading">What you'll cover</h3>
          <ul className="details-panel__curriculum">
            {course.curriculum.map((item, i) => (
              <li key={i}>
                <span className="details-panel__curriculum-index">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="details-panel__footer">
            <span className="details-panel__price">{formatPrice(course.price)}</span>
            <button
              className={`details-panel__cta${isEnrolled ? " details-panel__cta--enrolled" : ""}`}
              onClick={() => onEnroll(course)}
              disabled={isEnrolled}
            >
              {isEnrolled ? "Already enrolled" : "Enroll now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
