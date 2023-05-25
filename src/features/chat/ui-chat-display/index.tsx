import { JSX } from "react";
import { UiChatMessage } from "../ui-chat-message";
import { v4 as uuidv4 } from 'uuid';
import { Message } from "../../../api/types";
import './style.scss';

interface Props {
    messages: Message[]
}

export const UiChatDisplay = ({ messages }: Props): JSX.Element => {
    return (
        <div className="ui-chat__display display">
            {messages.map(messageData => (
                <UiChatMessage messageData={messageData} key={uuidv4()} />
            ))}
        </div>
    )
}
