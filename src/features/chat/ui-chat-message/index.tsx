import { JSX } from "react";
import classNames from "classnames";
import {PERMITTED_ROLES} from "../../../constants/chat";
import { Message } from "../../../api/types";
import './style.scss';

interface Props {
    messageData: Message
}

export const UiChatMessage = ({ messageData }: Props): JSX.Element => {
    const isUserMessage = messageData.role === PERMITTED_ROLES.USER;

    return (
        <div
            className={classNames({
                'message--from-bot': !isUserMessage,
                'message--from-user': isUserMessage,
                'ui-chat__message message': true
            })}
        >
            <span className="message__text">{messageData.message}</span>
        </div>
    )
}
