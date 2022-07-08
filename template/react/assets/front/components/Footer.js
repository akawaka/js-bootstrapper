import React, { useState } from 'react';

export default () => {
    const [variable, setVariable] = useState(false);

    function handleAction() {
        setVariable(true);
    }

    return (
        <footer className="main-footer">
            <ul className="vertical-navigation">
                <li>
                    <a href="//akawaka.fr/services.html">Services</a>
                </li>
                <li>
                    <a href="//akawaka.fr/contacter.html">Contact Us</a>
                </li>
            </ul>
        </footer>
    );
}
