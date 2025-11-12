import React, { useState, useCallback } from 'react';
import { QuizQuestion, GameStatus, Category } from './types';
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

  const startGame = useCallback((category: Category | 'all') => {
    const filteredQuestions = category === 'all'
      ? QUIZ_DATA
      : QUIZ_DATA.filter(q => q.category === category);
    
    setQuestions(shuffleArray(filteredQuestions));
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

  const resetGame = useCallback(() => {
    setGameStatus(GameStatus.Start);
  }, []);

  const renderGameContent = () => {
    switch (gameStatus) {
      case GameStatus.Playing:
        if (questions.length === 0) {
            // This can happen if a category has no questions.
            // Go back to the start screen.
            setGameStatus(GameStatus.Start);
            return null;
        }
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
            onRestart={resetGame}
          />
        );
      case GameStatus.Start:
      default:
        const CategoryButton: React.FC<{
            onClick: () => void;
            title: string;
            description: string;
        }> = ({ onClick, title, description }) => (
            <button
                onClick={onClick}
                className="w-full text-left p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:bg-indigo-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all transform hover:scale-105"
            >
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
            </button>
        );

        return (
            <div className="w-full max-w-2xl text-center p-8">
                <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">일본어 문장 퀴즈</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
                    학습하고 싶은 문법 카테고리를 선택하세요.
                </p>
                <div className="space-y-6">
                    <CategoryButton 
                        onClick={() => startGame(Category.Particles)}
                        title="1. 조사 (は, が, を, に, で...)"
                        description="문장의 뼈대를 이루는 가장 중요한 조사 사용법을 익힙니다."
                    />
                    <CategoryButton 
                        onClick={() => startGame(Category.Endings)}
                        title="2. 문말 표현 (です, ます...)"
                        description="정중한 문장을 만드는 기본 동사와 명사 마무리를 배웁니다."
                    />
                    <CategoryButton 
                        onClick={() => startGame('all')}
                        title="3. 전체 문제"
                        description="모든 카테고리의 문제를 무작위로 풀어보며 실력을 점검합니다."
                    />
                </div>
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
