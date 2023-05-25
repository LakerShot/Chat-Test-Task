import { JSX } from "react";
import './style.scss';

export const Header = (): JSX.Element => {
    return (
        <header className="header">
            <div className="header__inner">
                <h2 className="header__title">Наносемантика ТЗ</h2>
                <a
                    target="_blank"
                    rel="noopener"
                    href="https://morozov-egor.herokuapp.com/"
                    className="header__author"
                >
                    Morozov Egor
                </a>
            </div>
        </header>
    )
}
