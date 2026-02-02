import React from "react";
import type { AIChatContextValue } from "@/types";

// eslint-disable-next-line react-refresh/only-export-components
export const AIChatContext = React.createContext<AIChatContextValue | null>(
  null,
);

export default AIChatContext;
