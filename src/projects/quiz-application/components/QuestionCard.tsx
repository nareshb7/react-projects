import React from "react";
import { QuestionCardProps } from "../types";
import { questionLevelBgColor } from "../helper";

const QuestionCard = ({
  question: questionWrapper,
  isSubmitted,
  userAnswer,
  finalAnswer,
  onChange,
}: QuestionCardProps) => {
  const { id, options, question, explanation, answer, level } = questionWrapper;

  return (
    <div className="p-1 rounded border-b-2 ">
      <div className="font-bold p-1">
        <span>{id}. </span>
        <span>{question}</span>
        <span
          className={`rounded font-semibold px-2 py-1 ml-2 ${questionLevelBgColor(
            level
          )}`}
        >
          {level}
        </span>
      </div>
      <ul className="px-2">
        {options.map((option) => {
          return (
            <li>
              <label>
                <input
                  type="radio"
                  value={option.id}
                  checked={userAnswer === option.id}
                  name={`${id}`}
                  onChange={(e) => onChange(id, option.id)}
                />
                <span> {option.value}</span>
              </label>
            </li>
          );
        })}
      </ul>
      {isSubmitted && finalAnswer && (
        <>
          <div
            className={`answer font-semibold ${
              finalAnswer === answer ? "bg-green-200" : "bg-red-300"
            }`}
          >
            Answer: {finalAnswer}, {options[finalAnswer - 1].value}
          </div>
          <div>
            <span className="font-bold">Explanation: </span>
            <p>
              Your answer is {finalAnswer == answer ? "Correct" : "Wrong"},{" "}
              {explanation}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionCard;
