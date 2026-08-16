# EduNIGHT — Student Dashboard

A frontend module built for the UnivSVH technical assessment. EduNIGHT is a
fictional EdTech platform for people studying in the evening after work or
college — the dashboard is built around that "tonight's session" framing,
with a dark, low-glare theme instead of a typical bright course-marketplace
look.

This is **not** a production app: no backend, no auth, all course data is
static (`src/data/courses.js`). It focuses on the assigned frontend scope.

## What's included

- **Student dashboard** — greeting, day streak, and courses in progress
- **My learning** — enrolled courses shown as a "constellation" progress
  ring (each point is a lesson; lit points connect as you complete them)
- **Course catalog** — responsive grid of course cards with title,
  instructor, category, duration, level, rating, and price
- **Search** — filters by course title, instructor, or category
- **Category filter** — chip-based filter, works together with search
- **Course details** — modal with description, curriculum, and an
  "Enroll now" action that updates the dashboard live
- **Responsive layout** — down to small mobile widths

## Tech stack

- React 19 + Vite
- Plain CSS (design tokens in `src/index.css`, component styles in
  `src/App.css`) — no UI framework, so all styling decisions are visible
- No backend; enrollment state lives in React state for the session

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    StudentProgress.jsx      # enrolled courses + progress rings
    ConstellationRing.jsx    # signature progress visual
    SearchBar.jsx
    CategoryFilter.jsx
    CourseGrid.jsx
    CourseCard.jsx
    CourseDetails.jsx        # modal
    Footer.jsx
  data/
    courses.js                # dummy course + student data
  App.jsx                      # page composition + state
  App.css                      # component styles
  index.css                    # design tokens + global resets
  main.jsx                     # entry point
```

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To produce a production build:

```bash
npm run build
npm run preview   # serve the built files locally
```

## Notes on approach

- Course and student data are static so the module can be evaluated without
  any backend setup — swapping in a real API would mean replacing
  `src/data/courses.js` with fetched data and keeping the component props
  the same.
- The progress ring was chosen over a plain progress bar because it doubles
  as a small piece of the platform's visual identity (the "night sky" theme)
  while still communicating percentage complete at a glance.
- Enrollment is kept in component state rather than persisted anywhere,
  since there's no backend in scope — refreshing the page resets it.
