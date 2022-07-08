import React from 'react';

export default () => {
    return (
        <header className="main-header">
            <nav className="main-navigation">
                <div className="main-logo">
                    <img src="build/images/logo.svg" alt="Logo"/>
                </div>

                <ul className="horizontal-navigation">
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="//akawaka.fr/contacter.html">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
