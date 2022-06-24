import './sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Root from './pages/Root';

const root = ReactDOM.createRoot(
    document.getElementById('app')
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </React.StrictMode>
);
