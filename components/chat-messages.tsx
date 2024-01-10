"use client";

import { Companion } from "@prisma/client";
import { ChatMessage, ChatMessageProps } from "./chat-message";
import { ElementRef, useEffect, useRef, useState } from "react";
import { time } from "console";

interface ChatMessagesProps {
  message: ChatMessageProps[];
  isLoading: boolean;
  companion: Companion;
}

export const ChatMessages = ({
  message,
  isLoading,
  companion,
}: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null)


  const [fakeLoading, setFakeLoading] = useState(
    message.length === 0 ? true : false
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({behavior:"smooth"})
  },[])

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        src={companion.src}
        role="system"
        content={`Hello, I am ${companion.name}, ${companion.description}`}
      />
      {message.map((message) => (
        <ChatMessage
          key={message.content}
          src={message.src}
          role={message.role}
          content={message.content}
        />
      ))}
      {isLoading && (
        <ChatMessage role="system" src={companion.src} isLoading/>
      )}
      <div ref={scrollRef}/>
    </div>
  );
};
