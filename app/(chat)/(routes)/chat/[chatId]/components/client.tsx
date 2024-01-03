"use client";

import { Companion, Message } from "@prisma/client";

import { useCompletion } from "ai/react"
import { ChatHeader } from "@/components/chat-header";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ChatForm } from "@/components/chat-form";
import { ChatMessages } from "@/components/chat-messages";

interface ChatClientProps {
  companion: Companion & {
    message: Message[];
    _count: {
      message: number;
    };
  };
}

export const ChatClient = ({ companion }: ChatClientProps) => {
  const router = useRouter()
  const [message, setMessage] = useState<any[]>(companion.message)

  const {input, isLoading, handleInputChange, handleSubmit, setInput} = useCompletion({
    api: `api/chat/${companion.id}`,
    onFinish(prompt, completion){
      const systemMessage = {
        role: "system",
        content: completion
      }
    setMessage((current) => [...current, systemMessage])
    setInput("")

    router.refresh();
  }
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage = {
      role: "user",
      content: input
    }

    setMessage((current) => [...current, userMessage])

    handleSubmit(e)

  }
  
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
      <div>
        <ChatMessages 
        companion={companion}
        isLoading={isLoading}
        message={message}
        />
      </div>
      <ChatForm 
      isLoading={isLoading}
      input={input}
      handleInputChange={handleInputChange}
      onSubmit={onSubmit}
      />
    </div>
  );
};