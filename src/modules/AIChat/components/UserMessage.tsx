import React from "react";
import type { UserStep } from "@/types";

interface UserMessageProps {
  step: UserStep;
}

const UserMessage: React.FC<UserMessageProps> = ({ step }) => {
  const messageBg = "bg-aichat-user";

  return (
    <div className="flex justify-end">
      <div className="max-w-full lg:max-w-[75%]">
        <div
          className={`${messageBg} text-aichat-primary px-4 py-3 rounded-2xl rounded-tr-sm`}
        >
          <p className="whitespace-pre-wrap">{step.content.text}</p>
          {step.attachments && step.attachments.length > 0 && (
            <div className="mt-2 pt-2 border-t border-aichat-accent/20">
              <p className="text-xs opacity-80 mb-1">Attachments:</p>
              <div className="flex flex-wrap gap-1">
                {step.attachments.map((att) => (
                  <span
                    key={att.id}
                    className="text-xs px-2 py-1 bg-aichat-accent rounded"
                  >
                    {att.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <p className="text-xs text-aichat-secondary mt-1 text-right">
          {new Date(step.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default UserMessage;
