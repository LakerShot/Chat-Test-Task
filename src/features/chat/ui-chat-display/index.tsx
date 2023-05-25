import { JSX } from "react";
import './style.scss';
import {UiChatMessage} from "../ui-chat-message";

interface Props {
    messages: any
}

export const UiChatDisplay = ({ messages }: Props): JSX.Element => {
    console.log(messages)

    return (
        <div className="ui-chat__display display">
            {messages.map(messageData => (
                <UiChatMessage messageData={messageData} key={messageData.id} />
            ))}
        </div>
    )
}
