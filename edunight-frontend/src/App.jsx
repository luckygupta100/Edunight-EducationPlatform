import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentProgress from "./components/StudentProgress";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import CourseGrid from "./components/CourseGrid";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";
import { courses, CATEGORIES, currentStudent } from "./data/courses";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Enrollment starts from the dummy student record, but lives in state
  // so "Enroll now" in the details panel can update it live.
  const [enrolledIds, setEnrolledIds] = useState(
    () => new Set(currentStudent.enrolled.map((e) => e.courseId))
  );

  const enrolledCourses = useMemo(
    () =>
      currentStudent.enrolled
        .filter((e) => enrolledIds.has(e.courseId))
        .map((e) => ({
          course: courses.find((c) => c.id === e.courseId),
          progress: e.progress,
        }))
        .filter((e) => e.course),
    [enrolledIds]
  );

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = activeCategory === "All" || course.category === activeCategory;
      const matchesQuery =
        query.length === 0 ||
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, activeCategory]);

  function handleEnroll(course) {
    setEnrolledIds((prev) => {
      const next = new Set(prev);
      next.add(course.id);
      return next;
    });
    // If enrolling from scratch (not part of seeded data), give it 0% progress
    // by pushing into the same shape the seeded list already uses.
    if (!currentStudent.enrolled.some((e) => e.courseId === course.id)) {
      currentStudent.enrolled.push({ courseId: course.id, progress: 0 });
    }
  }

  return (
    <div className="app">
      <Navbar studentName={currentStudent.name} />

      <main className="app__main">
        <Hero
          studentName={currentStudent.name}
          streakDays={currentStudent.streakDays}
          enrolledCount={enrolledCourses.length}
        />

        <StudentProgress
          enrolledCourses={enrolledCourses}
          onSelectCourse={setSelectedCourse}
        />

        <section className="catalog" id="courses" aria-label="Course catalog">
          <div className="section-heading">
            <h2>Explore courses</h2>
            <p>{filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} available</p>
          </div>

          <div className="catalog__controls">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <CategoryFilter
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
          </div>

          <CourseGrid courses={filteredCourses} onSelectCourse={setSelectedCourse} />
        </section>
      </main>

      <Footer />

      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          isEnrolled={enrolledIds.has(selectedCourse.id)}
          onEnroll={handleEnroll}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}

export default App;
