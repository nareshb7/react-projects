import { Button } from "common/Components";
import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { AnswerType, Question, TechnologyType } from "./types";
import { getQuestions } from "./helper";

const technologies: TechnologyType[] = ["React", "HTML", "CSS", "Node JS"];

const Quiz = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>(getQuestions("React"));
  const [answers, setAnswers] = useState<AnswerType>({});
  const [finalAnswers, setFinalAnswers] = useState<AnswerType>({});
  const [score, setScore] = useState(0);
  const [technology, setTechnology] = useState<TechnologyType>("React");
  
  const handleChange = (id: number, answer: number) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
  };
  const handleSubmit = () => {
    setIsSubmitted(true);
    let score = 0;
    questions.forEach((question) => {
      const { id, answer } = question;
      const userAnswer = answers[id];
      if (answer === userAnswer) {
        score++;
      }
    });
    setFinalAnswers(answers);
    setScore(score);
    alert(`Your ${technology} score is ${score}`);
  };
  const handleClear = () => {
    setAnswers({});
    setFinalAnswers({});
    setIsSubmitted(false);
  };
  const handleTechChange = (tech: TechnologyType) => {
    setTechnology(tech);
    setQuestions(getQuestions(tech));
  };

  return (
    <div>
      <div>
        <span className="font-bold p-2 text-2xl">Quiz</span>
        {isSubmitted && (
          <span className="font-semibold ml-4 text-red-500">
            Your Score is {score}
          </span>
        )}
      </div>
      <div>
        {technologies.map((technology) => (
          <Button
            key={technology}
            title={technology}
            onClick={() => handleTechChange(technology)}
          />
        ))}
      </div>
      <div>
        <div className="font-semibold text-lg border border-b-2 text-center">
          {technology} Quiz
          <div>
            {technology !== "React" && (
              <span className="font font-mono font-light text-sm">
                Alert: For now we are showing react questions only
              </span>
            )}
          </div>
        </div>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            isSubmitted={isSubmitted}
            onChange={handleChange}
            userAnswer={answers[question.id]}
            finalAnswer={finalAnswers[question.id]}
          />
        ))}
      </div>
      <div>
        <Button title="Submit" onClick={handleSubmit} />
        <Button title="Clear" onClick={handleClear} />
      </div>
    </div>
  );
};

export default Quiz;
