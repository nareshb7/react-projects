export type QuestionLevel = "Easy"| "Medium"| "Hard"
export type TechnologyType = "React"| "HTML" | "CSS" | "Node JS"

export interface QuestionOptions {
    id:number;
    value: string
}

export interface Question {
    id: number;
    question:string;
    options: QuestionOptions[];
    answer: number;
    explanation: string;
    level: QuestionLevel,
    topic?: string;
}

export interface QuestionCardProps {
    question: Question;
    isSubmitted:boolean;
    onChange: (name: number,value:number) => void;
    userAnswer: number;
    finalAnswer: number;
}