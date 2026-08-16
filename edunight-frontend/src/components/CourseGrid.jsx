import CourseCard from "./CourseCard";

function CourseGrid({ courses, onSelectCourse }) {
  if (courses.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-state__mark" aria-hidden="true">☾</span>
        <h3>No courses match that search</h3>
        <p>Try a different keyword, or clear the category filter above.</p>
      </div>
    );
  }

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onSelect={onSelectCourse} />
      ))}
    </div>
  );
}

export default CourseGrid;
