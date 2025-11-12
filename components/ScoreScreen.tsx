
import React from 'react';

interface ScoreScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedbackMessage = () => {
    if (percentage === 100) return "完璧です！ (완벽해요!)";
    if (percentage >= 80) return "素晴らしい！ (훌륭해요!)";
    if (percentage >= 50) return "よくできました！ (잘했어요!)";
    return "もう一度頑張って！ (다시 한번 힘내봐요!)";
  };

  return (
    <div className="w-full max-w-md text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-2">퀴즈 완료!</h2>
      <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{getFeedbackMessage()}</p>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        당신의 점수는 <span className="font-bold text-xl">{totalQuestions}</span>점 만점에 <span className="font-bold text-xl">{score}</span>점 입니다.
      </p>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 mb-8">
        <div 
          className="bg-green-500 h-4 rounded-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none"
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>
      <button
        onClick={onRestart}
        className="w-full py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-transform transform hover:scale-105"
      >
        다시 시작하기
      </button>
    </div>
  );
};

export default ScoreScreen;
   