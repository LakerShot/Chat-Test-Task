import { JSX } from "react";
import './style.scss';

export const Header = (): JSX.Element => {
    return (
        <header className="header">
            <div className="header__inner">
                <h2 className="header__title">Наносметика ТЗ</h2>
            </div>
        </header>
    )
}
