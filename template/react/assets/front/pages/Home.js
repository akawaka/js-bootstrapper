import React from 'react';
import Nav from './../components/Nav';
import Header from './../components/Header';

export default () => {
    return (
        <div className="relative overflow-hidden">
            <Nav/>

            <main>
                <Header/>
            </main>
        </div>
    );
}
