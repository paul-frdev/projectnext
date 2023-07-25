export type Question = {
  questionText: string;
  answerOptions: AnswerOptions[];
  point?: string;
  secondPoint?: string;
};

export type AnswerOptions = {
  id: number;
  answerText: string;
};

export type ShowMessage = {
  id?: number;
  title?: string;
  src?: string;
  text?: string
  subtitle?: string;
  spanText?: string;
}
