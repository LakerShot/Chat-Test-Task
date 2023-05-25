import { JSX } from "react";
import { UiChatForm } from "../ui-chat-form";
import { UiChatDisplay } from "../ui-chat-display";
import { useChat } from "../../../hooks/useChat";
import './style.scss';

export const UiChat = (): JSX.Element => {
    const {
        cuid,
        messages,
        sendNewMessage,
        setNewLocalMessage,
        clearChatSession
    } = useChat()

    return (
        <div className="ui-chat">
            <UiChatDisplay
                messages={messages}
            />
            <UiChatForm
                cuid={cuid}
                sendNewMessage={sendNewMessage}
                setNewLocalMessage={setNewLocalMessage}
                clearChatSession={clearChatSession}
            />
        </div>
    )
}
