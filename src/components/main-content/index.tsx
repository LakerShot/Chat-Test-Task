import { JSX } from "react";
import { UiChat } from "../../features/chat/ui-chat";
import './style.scss';

export const MainContent = (): JSX.Element => {
    return (
        <main className="main">
            <div className="main__inner">
                <h2 className="main__title">UI Chat</h2>
                <section className="main__ui-chat-container">
                    <UiChat className="main__ui-chat" />
                </section>
            </div>
        </main>
    )
}
