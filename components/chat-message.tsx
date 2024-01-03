"use client"

export interface ChatMessageProps {
    role: "system" | "user"
    content: string;
    isLoading: boolean;
    
}


export const ChatMessage = () => {
    return(
        <div>
            Chat message
        </div>
    )
}