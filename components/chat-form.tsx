"chat-client"

import { ChangeEvent, FormEvent } from "react"

interface ChatFormProps {
    input: string,
    handleInputChange : (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
    onSubmit: (e: FormEvent<HTMLFormElement>)
    
}

export const ChatForm = () => {
    return(
        <div>
            Chat form
        </div>
    )
}