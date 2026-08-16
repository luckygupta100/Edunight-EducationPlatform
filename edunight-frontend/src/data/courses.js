// Static/dummy data for the EduNIGHT assessment build.
// In a real product this would come from an API.

export const CATEGORIES = [
  "All",
  "Web Development",
  "Data Science",
  "Design",
  "Mathematics",
  "Language",
];

export const courses = [
  {
    id: "c1",
    title: "React for Late Starters",
    instructor: "Ananya Rao",
    category: "Web Development",
    duration: "6h 20m",
    price: 0,
    level: "Beginner",
    rating: 4.8,
    students: 3120,
    color: "#7C9EFF",
    description:
      "A ground-up tour of React: components, state, and effects, taught at a pace built for evening study sessions. Ends with a small project you can show off.",
    curriculum: [
      "Why components, not pages",
      "State and the render cycle",
      "Effects and data fetching",
      "Building a mini dashboard",
    ],
  },
  {
    id: "c2",
    title: "Python for Data Analysis",
    instructor: "Rahul Mehta",
    category: "Data Science",
    duration: "9h 45m",
    price: 499,
    level: "Intermediate",
    rating: 4.7,
    students: 5410,
    color: "#6FCF97",
    description:
      "Pandas, NumPy, and just enough statistics to read a dataset properly. Built around real, slightly messy data instead of tidy toy examples.",
    curriculum: [
      "DataFrames without the confusion",
      "Cleaning messy real-world data",
      "Grouping, joining, reshaping",
      "Telling a story with a chart",
    ],
  },
  {
    id: "c3",
    title: "UI Design Foundations",
    instructor: "Isha Kapoor",
    category: "Design",
    duration: "5h 10m",
    price: 349,
    level: "Beginner",
    rating: 4.9,
    students: 2870,
    color: "#E8A33D",
    description:
      "Typography, spacing, and colour theory explained through redesigns of real interfaces, not abstract rules. You will rebuild three bad screens into good ones.",
    curriculum: [
      "Why most first drafts look flat",
      "Typography as a system",
      "Spacing, rhythm, and hierarchy",
      "Redesign critique workshop",
    ],
  },
  {
    id: "c4",
    title: "Calculus, Explained Slowly",
    instructor: "Devendra Singh",
    category: "Mathematics",
    duration: "11h 00m",
    price: 0,
    level: "Beginner",
    rating: 4.6,
    students: 6210,
    color: "#F28B82",
    description:
      "Limits, derivatives, and integrals built up from first principles with visuals, for anyone who needs the 'why' before the formula.",
    curriculum: [
      "What a limit actually is",
      "Derivatives as rates of change",
      "Integrals as accumulation",
      "Applying it to real problems",
    ],
  },
  {
    id: "c5",
    title: "Conversational Spanish",
    instructor: "Marta Gil",
    category: "Language",
    duration: "8h 30m",
    price: 299,
    level: "Beginner",
    rating: 4.5,
    students: 1980,
    color: "#C77DFF",
    description:
      "Built for short, spoken practice rather than grammar drills. Every lesson ends with a dialogue you can actually use the next day.",
    curriculum: [
      "Greetings and small talk",
      "Ordering, asking, directions",
      "Past tense in real sentences",
      "Free conversation practice",
    ],
  },
  {
    id: "c6",
    title: "Advanced CSS & Layout Systems",
    instructor: "Ananya Rao",
    category: "Web Development",
    duration: "7h 15m",
    price: 399,
    level: "Advanced",
    rating: 4.8,
    students: 2410,
    color: "#7C9EFF",
    description:
      "Grid, flexbox, and container queries used together to build layouts that hold up across screen sizes, not just at three breakpoints.",
    curriculum: [
      "Grid vs flexbox, when to use which",
      "Container queries in practice",
      "Fluid type and spacing scales",
      "Building a responsive dashboard",
    ],
  },
  {
    id: "c7",
    title: "Machine Learning Basics",
    instructor: "Rahul Mehta",
    category: "Data Science",
    duration: "10h 30m",
    price: 599,
    level: "Intermediate",
    rating: 4.7,
    students: 4100,
    color: "#6FCF97",
    description:
      "Regression, classification, and evaluation metrics explained with small, inspectable datasets so the maths never outruns the intuition.",
    curriculum: [
      "Regression from scratch",
      "Classification and decision boundaries",
      "Overfitting and evaluation",
      "A small end-to-end project",
    ],
  },
  {
    id: "c8",
    title: "Design Systems in Practice",
    instructor: "Isha Kapoor",
    category: "Design",
    duration: "6h 45m",
    price: 449,
    level: "Advanced",
    rating: 4.9,
    students: 1540,
    color: "#E8A33D",
    description:
      "Tokens, components, and documentation for teams that need consistency across a growing product, not just one polished screen.",
    curriculum: [
      "Tokens: colour, type, spacing",
      "Component anatomy and states",
      "Documenting for other designers",
      "Rolling a system out to a team",
    ],
  },
];

// The learner currently "logged in" for this assessment build.
export const currentStudent = {
  name: "Lucky",
  streakDays: 12,
  enrolled: [
    { courseId: "c1", progress: 0.72 },
    { courseId: "c3", progress: 0.35 },
    { courseId: "c4", progress: 0.9 },
    { courseId: "c7", progress: 0.15 },
  ],
};
