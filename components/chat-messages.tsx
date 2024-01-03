"use client";

import { Companion } from "@prisma/client";
import { ChatMessage } from "./chat-message";

interface ChatMessageProps {
  message: any[];
  isLoading: boolean;
  companion: Companion;
}

export const ChatMessages = ({
  message,
  isLoading,
  companion,
}: ChatMessageProps) => {
  return (
      <div className="flex-1 overflow-y-auto pr-4">
        <ChatMessage />
      </div>
  );
};
