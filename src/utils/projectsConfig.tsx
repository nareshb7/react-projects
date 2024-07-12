export type ProjectStatusType = "In Progress" | "Pending" | "Completed"

export interface ProjectsListModal {
    id: number;
    title: string;
    status: ProjectStatusType;
    path: string;
}
export const projectsList: ProjectsListModal[] = [
  {
    id: 1,
    title: "Todo List",
    status: "Completed",
    path: "/todo"
  },
  {
    id: 2,
    title: "Weather App",
    status: "Completed",
    path: "/weather"
  },
  {
    id: 3,
    title: "Pagination Component",
    status: "Completed",
    path: "/pagination"
  },
  {
    id: 4,
    title: "Login Form",
    status: "Completed",
    path: "/login-form"
  },
  {
    id: 5,
    title: "Countdown Timer",
    status: "Completed",
    path: "/timer"
  },
  {
    id: 6,
    title: "Modal Component",
    status: "Completed",
    path: "/modal"
  },
  {
    id: 7,
    title: "Drag and Drop",
    status: "Completed",
    path: "/drag-drop"
  },
  {
    id: 8,
    title: "Chat Application",
    status: "Completed",
    path: "/chat"
  },
  {
    id: 9,
    title: "Dropdown Component",
    status: "Completed",
    path: "/dropdown"
  },
  {
    id: 10,
    title: "Form Validation",
    status: "Completed",
    path: "/form-validation"
  },
  {
    id: 11,
    title: "Carousel Component",
    status: "Completed",
    path: "/carousel"
  },
  {
    id: 12,
    title: "Responsive Layout",
    status: "Completed",
    path: "/responsiveLayout"
  },
  {
    id: 13,
    title: "Redux Store",
    status: "Completed",
    path: "/redux"
  },
  {
    id: 14,
    title: "Infinite Scroll Component",
    status: "Completed",
    path: "/infinite-scroll"
  },
  {
    id: 15,
    title: "Quiz Application",
    status: "Completed",
    path: "/quiz"
  },
  {
    id: 16,
    title: "Calculator",
    status: "Completed",
    path: "/calculator"
  },
  {
    id: 17,
    title: "E-Commerce",
    status: "Completed",
    path: "/e-commerce"
  },
  {
    id: 18,
    title: "Shimmer UI",
    status: "Completed",
    path: "/shimmer-ui"
  },
  {
    id: 19,
    title: "Image Editor",
    status: "Completed",
    path: "/image-editor"
  },
  {
    id: 20,
    title: "Lift Elevator",
    status: "Completed",
    path: '/lift-elevator'
  }
];