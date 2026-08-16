function formatPrice(price) {
  return price === 0 ? "Free" : `₹${price}`;
}

function CourseCard({ course, onSelect }) {
  return (
    <article className="course-card">
      <div
        className="course-card__thumb"
        style={{ "--course-color": course.color }}
        aria-hidden="true"
      >
        <span className="course-card__category">{course.category}</span>
      </div>

      <div className="course-card__body">
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__instructor">{course.instructor}</p>

        <dl className="course-card__meta">
          <div>
            <dt>Duration</dt>
            <dd>{course.duration}</dd>
          </div>
          <div>
            <dt>Level</dt>
            <dd>{course.level}</dd>
          </div>
          <div>
            <dt>Rating</dt>
            <dd>{course.rating.toFixed(1)} ★</dd>
          </div>
        </dl>

        <div className="course-card__footer">
          <span className="course-card__price">{formatPrice(course.price)}</span>
          <button className="course-card__cta" onClick={() => onSelect(course)}>
            View details
          </button>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
