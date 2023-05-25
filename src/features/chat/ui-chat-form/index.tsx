import {FormEvent, JSX, KeyboardEvent, MouseEvent, useState} from "react";
import { MAX_LENGTH_MESSAGE } from "../../../constants/chat";
import ArrowIcon from '../../../assets/svg/airplane.svg';
import ResetIcon from '../../../assets/svg/reset.svg';
import './style.scss';

export const UiChatForm = (): JSX.Element => {
    const [message, setMessage] = useState<string>('');

    const resetForm = (): void => {
        setMessage('')
    }

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        resetForm()
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (event.key === 'Enter') {
            resetForm()
        }
    }

    const resetSession = (event: MouseEvent<HTMLButtonElement>): void => {
        console.log(event);
        //TODO: Write modal widget based on React Teleport
        window.confirm('Are you sure that you wanna delete this session and clear all messages ?')
    }

    return (
        <div className="ui-chat__actions actions">
            <form className="actions__form" onClick={handleSubmitForm}>
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
