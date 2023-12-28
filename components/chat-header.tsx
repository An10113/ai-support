"use client";

import { Companion, Message } from "@prisma/client";

interface ChatHeaderProps {
  companion: Companion & {
    message: Message[];
    _count: {
      message: number;
    };
  };
}

export const ChatHeader = ({ companion }: ChatHeaderProps) => {
  return (<div className="">Chat Header</div>);
};