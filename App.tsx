import React, { useState, useCallback, useEffect } from 'react';
import { QuizQuestion, GameStatus } from './types';
import { QUIZ_DATA } from './constants';
import QuizCard from './components/QuizCard';
import ScoreScreen from './components/ScoreScreen';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Start);

  const startGame = useCallback(() => {
    setQuestions(shuffleArray(QUIZ_DATA));
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameStatus(GameStatus.Playing);
  }, []);
  
  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameStatus(GameStatus.Finished);
    }
  }, [currentQuestionIndex, questions.length]);

  const renderGameContent = () => {
    switch (gameStatus) {
      case GameStatus.Playing:
        return (
          <QuizCard 
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        );
      case GameStatus.Finished:
        return (
          <ScoreScreen 
            score={score}
            totalQuestions={questions.length}
            onRestart={startGame}
          />
        );
      case GameStatus.Start:
      default:
        return (
            <div className="w-full max-w-xl text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl">
                <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">일본어 문장 퀴즈</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                히라가나와 가타카나 학습을 마친 여러분을 위한 기초 일본어 문장 퀴즈입니다. <br/> 문장의 빈칸에 들어갈 올바른 단어를 선택하여 문법 실력을 향상시켜 보세요!
                </p>
                <button 
                onClick={startGame}
                className="w-full py-4 text-xl font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-transform transform hover:scale-105"
                >
                퀴즈 시작하기
                </button>
            </div>
        );
    }
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 font-sans">
      {renderGameContent()}
    </main>
  );
};

export default App;