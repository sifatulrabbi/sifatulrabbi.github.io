import React from "react";
import type { Step, UserStep, AIStep, ToolResultStep, Artifact } from "@/types";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";
import ToolResultView from "./ToolResultView";

interface StepRendererProps {
  step: Step;
  isLast: boolean;
  onArtifactClick: (id: string) => void;
  artifactsById: Record<string, Artifact>;
}

const StepRenderer: React.FC<StepRendererProps> = ({
  step,
  isLast,
  onArtifactClick,
  artifactsById,
}) => {
  switch (step.type) {
    case "user":
      return <UserMessage step={step as UserStep} />;
    case "ai":
      return (
        <AIMessage
          step={step as AIStep}
          isLast={isLast}
          onArtifactClick={onArtifactClick}
          artifactsById={artifactsById}
        />
      );
    case "tool_result":
      return <ToolResultView step={step as ToolResultStep} />;
    default:
      return null;
  }
};

export default StepRenderer;
