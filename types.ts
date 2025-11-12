export interface Vocabulary {
  word: string;
  reading: string;
  meaning: string;
}

export interface QuizQuestion {
  sentence: [string, string];
  options: string[];
  answer: string;
  translation: string;
  explanations: { [key: string]: string };
  example: {
    sentence: string;
    translation: string;
  };
  vocabulary: Vocabulary[];
}

export enum GameStatus {
  Start = 'start',
  Playing = 'playing',
  Finished = 'finished',
}