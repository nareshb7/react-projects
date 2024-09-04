import { Question, QuestionLevel, TechnologyType } from "./types";
import reactQuestions from "./components/reactData.json";

export const questionLevelBgColor = (level: QuestionLevel) => {
  return level === "Easy"
    ? "bg-green-200"
    : level === "Medium"
    ? "bg-yellow-200"
    : "bg-red-300";
};

export const getQuestions = (tech: TechnologyType): Question[] => {
  switch (tech) {
    case "React": {
      return reactQuestions as Question[];
    }
    case "HTML": {
      return reactQuestions as Question[];
    }
    case "CSS": {
      return reactQuestions as Question[];
    }
    case "Node JS": {
      return reactQuestions as Question[];
    }
  }
};
