import React, { useEffect, useState } from "react";
import BlinkingCursor from "./BlinkingCursor";

interface TypeWriterProps {
  text: string;
  delay?: number; // delay before starting (ms)
  speed?: number; // delay between each character (ms)
  onComplete?: () => void;
  showCursor?: boolean;
  className?: string;
  cursorClassName?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  delay = 0,
  speed = 30,
  onComplete,
  showCursor = true,
  className = "",
  cursorClassName = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex < text.length) {
        setDisplayText(text.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeNextChar, speed);
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    };

    // Start typing after initial delay
    timeout = setTimeout(typeNextChar, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <BlinkingCursor className={cursorClassName} />
      )}
    </span>
  );
};

export default TypeWriter;
