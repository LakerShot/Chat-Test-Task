import {FormEvent, JSX, KeyboardEvent, MouseEvent, useState} from "react";
import { MAX_LENGTH_MESSAGE } from "../../../constants/chat";
import ArrowIcon from '../../../assets/svg/airplane.svg';
import ResetIcon from '../../../assets/svg/reset.svg';
import './style.scss';
import {MessagePayload} from "../../../api/types";

interface Props {
    cuid: string
    sendNewMessage: (arg: MessagePayload) => void
    setNewLocalMessage: (arg: string) => void
    clearChatSession: () => void
}
export const UiChatForm = ({ cuid, sendNewMessage, setNewLocalMessage, clearChatSession }: Props): JSX.Element => {
    const [message, setMessage] = useState<string>('');

    const resetForm = (): void => {
        setMessage('')
    }

    const handleNewMessage = () => {
        const formattedMessage = message.trim()
        if (!formattedMessage) return

        setNewLocalMessage(formattedMessage)
        sendNewMessage({ cuid, text: formattedMessage })

        resetForm()
    }

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        handleNewMessage()
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (event.key === 'Enter') {
            handleNewMessage();
        }
    }

    const resetSession = (): void => {
        //TODO: Write modal widget based on React Teleport
        const isConfirmed =  window.confirm('Are you sure that you wanna delete this session and clear all messages ?')

        if (isConfirmed) {
            clearChatSession()
        }
    }

    return (
        <div className="ui-chat__actions actions">
            <form className="actions__form" onSubmit={handleSubmitForm}>
                <textarea
                    className="actions__textarea"
                    maxLength={MAX_LENGTH_MESSAGE}
                    placeholder="Your message..."
                    autoFocus
                    onKeyDown={handleKeyDown}
                    onChange={event => setMessage(event.target.value)}
                    aria-label="chat textarea"
                    value={message}
                />
                <button
                    type="submit"
                    className="actions__submit-btn"
                    aria-label="submit form button"
                    aria-pressed="false"
                    disabled={!message}
                >
                    <img src={ArrowIcon} className="actions__image" alt="submit arrow icon" />
                </button>
                <button
                    type="button"
                    className="actions__reset-btn actions__reset-btn--reset"
                    aria-label="reset form button"
                    aria-pressed="false"
                    onClick={resetSession}
                >
                    <img src={ResetIcon} className="actions__image" alt="submit arrow icon" />
                </button>
            </form>
        </div>
    )
}
