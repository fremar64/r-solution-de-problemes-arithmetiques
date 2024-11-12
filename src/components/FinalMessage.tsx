import { Alert, AlertDescription } from "@/components/ui/alert";

interface FinalMessageProps {
  score: number;
  isComplete: boolean;
}

export const getFinalMessage = (score: number): string => {
  switch (score) {
    case 5:
      return "Bravo ! Performance très satisfaisante !";
    case 4:
      return "Bravo ! Performance satisfaisante !";
    case 3:
      return "Performance insuffisante ! Tu dois encore t'entraîner, clique sur Recommencer";
    case 2:
    case 1:
      return "Performance très insuffisante ! Il faut encore t'entraîner, clique sur Recommencer";
    default:
      return "Performance très insuffisante ! Il faut encore t'entraîner, clique sur Recommencer";
  }
};

const FinalMessage = ({ score, isComplete }: FinalMessageProps) => {
  if (!isComplete) return null;

  return (
    <Alert className="mt-4 max-w-2xl mx-auto">
      <AlertDescription>{getFinalMessage(score)}</AlertDescription>
    </Alert>
  );
};

export default FinalMessage;