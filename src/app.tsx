import './assets/styles/main.scss';
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";

export const App = () => {
    return (
        <section className="chat-page">
            <Header />
            <MainContent />
        </section>
    )
}
