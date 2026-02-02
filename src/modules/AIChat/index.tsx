import React from "react";
import AIChatLayout from "./components/AIChatLayout";
import ThreadsSidebar from "./components/ThreadsSidebar";
import ChatHistory from "./components/ChatHistory";
import ArtifactsPanel from "./components/ArtifactsPanel";

const AIChatPage: React.FC = () => {
  return (
    <AIChatLayout
      sidebar={<ThreadsSidebar />}
      chat={<ChatHistory />}
      artifacts={<ArtifactsPanel />}
    />
  );
};

export default AIChatPage;
