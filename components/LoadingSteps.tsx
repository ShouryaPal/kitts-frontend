import { CircleCheck, Loader2 } from "lucide-react";

interface LoadingStepProps {
  step: number;
  currentStep: number;
  text: string;
}

export const LoadingStep: React.FC<LoadingStepProps> = ({
  step,
  currentStep,
  text,
}) => {
  const isLoading = currentStep === step;
  const isComplete = currentStep > step;

  return (
    <span
      className={`text-lg flex items-center gap-2 ${
        isComplete || isLoading ? "text-[#787B80]" : "text-[#C9CACC]"
      }`}
    >
      {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
      {isComplete && <CircleCheck className="w-5 h-5 text-[#003E39]" />}
      {!isLoading && !isComplete && <div className="w-5 h-5" />}
      {text}
    </span>
  );
};
