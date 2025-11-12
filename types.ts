export interface Vocabulary {
  word: string;
  reading: string;
  meaning: string;
}

export enum Category {
  Particles = '조사',
  Endings = '문말 표현',
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
  category: Category;
}

export enum GameStatus {
  Start = 'start',
  Playing = 'playing',
  Finished = 'finished',
}
