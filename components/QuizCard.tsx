import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, onNext, questionNumber, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setSelectedAnswer(null);
    setFeedback(null);
    setIsCorrect(null);
  }, [question]);


  const handleAnswerClick = (option: string) => {
    if (selectedAnswer) return; // Prevent multiple clicks

    const correct = option === question.answer;
    setSelectedAnswer(option);
    setIsCorrect(correct);

    const vocabListHtml = `
      <div class='mt-4 pt-3 border-t border-slate-300/50 dark:border-slate-600/50'>
        <h4 class='font-semibold text-base mb-2'>📖 문장 속 단어</h4>
        <ul class='space-y-1'>
          ${question.vocabulary.map(v => 
            `<li><span class='font-bold text-indigo-600 dark:text-indigo-400'>${v.word}</span> <span class='text-sm text-slate-500 dark:text-slate-400'>[${v.reading}]</span>: ${v.meaning}</li>`
          ).join('')}
        </ul>
      </div>
    `;

    if (correct) {
        setFeedback(
          `<strong>정답입니다!</strong><br><br><strong>'${question.answer}' 설명:</strong> ${question.explanations[question.answer]}<br><br><strong>다른 예시:</strong> ${question.example.sentence} (${question.example.translation})` + vocabListHtml
        );
    } else {
        setFeedback(
            `<strong>아쉽네요.</strong> 선택하신 '<strong>${option}</strong>'의 설명은 다음과 같아요.<br><br><strong>'${option}' 설명:</strong> ${question.explanations[option]}<br><br>이 문장에서는 '<strong>${question.answer}</strong>'를 사용해야 합니다. (${question.explanations[question.answer]})` + vocabListHtml
        );
    }

    onAnswer(correct);
  };

  const getButtonClass = (option: string) => {
    if (!selectedAnswer) {
      return 'bg-white dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-slate-600';
    }
    if (option === question.answer) {
      return 'bg-green-500 text-white';
    }
    if (option === selectedAnswer) {
      return 'bg-red-500 text-white';
    }
    return 'bg-white dark:bg-slate-700 opacity-50 cursor-not-allowed';
  };
  
  return (
    <div className="w-full max-w-2xl p-6 md:p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl transition-all duration-300">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Question {questionNumber} / {totalQuestions}</h2>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}></div>
        </div>
      </div>

      <div className="mb-8 text-center">
        <p className="text-3xl md:text-4xl font-bold tracking-wider text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-900/50 p-6 rounded-lg">
          {question.sentence[0]}
          <span className="inline-block text-center text-indigo-500 font-mono mx-2 px-6 py-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800">
             {selectedAnswer || ' ? '}
          </span>
          {question.sentence[1]}
        </p>
        <p className="mt-4 text-md text-slate-500 dark:text-slate-400">
          {question.translation}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerClick(option)}
            disabled={!!selectedAnswer}
            className={`w-full p-4 text-xl font-semibold rounded-lg border border-slate-300 dark:border-slate-600 transition-all duration-300 transform hover:scale-105 ${getButtonClass(option)} ${!selectedAnswer ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {feedback && (
        <div className={`mt-6 p-4 rounded-lg text-left text-base ${
            isCorrect
                ? 'bg-green-100 dark:bg-green-900/50 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200'
                : 'bg-red-100 dark:bg-red-900/50 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200'
            }`}
        >
            <p dangerouslySetInnerHTML={{ __html: feedback }} />
        </div>
      )}

      {selectedAnswer && (
        <div className="mt-6 text-right">
          <button
            onClick={onNext}
            className="px-8 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-transform transform hover:scale-105"
          >
            다음
          </button>
        </div>
      )}

    </div>
  );
};

export default QuizCard;