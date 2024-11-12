interface ScoreDisplayProps {
  score: number;
  questionNumber: number;
}

const ScoreDisplay = ({ score, questionNumber }: ScoreDisplayProps) => (
  <p className="text-lg font-bold">
    Mon score : {score} sur {questionNumber}
  </p>
);

export default ScoreDisplay;