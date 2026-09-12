export const profile = {
  name: "Siddhi Amare",
  initials: "SA",
  location: "Mumbai",
  email: "siddhi.amare04@gmail.com",
  github: "https://github.com/siddhiamare",
  linkedin: "https://linkedin.com/in/siddhi-amare",
  roles: ["Python Developer", "Full-Stack Engineer", "ML Enthusiast", "Cloud Builder"],
  description:
    "Building clean, well-tested full-stack applications with Python, Django, and React — with a growing focus on cloud infrastructure and machine learning.",
};

export type Project = {
  title: string;
  tag: string;
  stack: string;
  description: string;
  span: string; // tailwind col-span classes
  aspect: string; // tailwind aspect classes
};

export const projects: Project[] = [
  {
    title: "Campus Placement Predictor",
    tag: "Machine Learning",
    stack: "Python · Flask · Scikit-learn · Streamlit",
    description:
      "A full-stack ML web app reaching 95%+ accuracy, with a live prediction API and feature engineering across 500+ student records.",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
  {
    title: "AWS Photo Booking Platform",
    tag: "Cloud Architecture",
    stack: "Python · Lambda · API Gateway · DynamoDB",
    description:
      "A distributed, serverless booking platform with least-privilege IAM roles and modular, object-oriented backend code.",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-square",
  },
  {
    title: "Student Grade Predictor",
    tag: "Machine Learning",
    stack: "Python · Flask · HTML/CSS",
    description:
      "An end-to-end ML application predicting academic grades from attendance and study habits, with cross-validated tuning.",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-square",
  },
  {
    title: "Multi-Currency Converter",
    tag: "Full-Stack",
    stack: "Python · JavaScript · REST APIs",
    description:
      "A production full-stack app handling 150+ currencies at 99.5% accuracy, with request/response refactors cutting latency by 30%.",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
  },
];

export type Note = {
  title: string;
  readTime: string;
  date: string;
};

export const notes: Note[] = [
  {
    title: "Debugging real-time currency APIs under load",
    readTime: "4 min read",
    date: "Sep 2025",
  },
  {
    title: "Designing a serverless backend with least-privilege IAM",
    readTime: "6 min read",
    date: "Aug 2025",
  },
  {
    title: "What cross-validation actually caught in my grade model",
    readTime: "5 min read",
    date: "Jun 2025",
  },
  {
    title: "A Git workflow for mentorship-driven code review",
    readTime: "3 min read",
    date: "May 2025",
  },
];

export const stack = [
  "Python",
  "Django",
  "Flask",
  "React",
  "AWS Lambda",
  "DynamoDB",
];

export const stats = [
  { value: "150+", label: "Currencies Integrated" },
  { value: "95%+", label: "Model Accuracy" },
  { value: "30%", label: "Faster Processing" },
];
