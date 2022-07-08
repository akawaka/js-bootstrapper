import React from 'react';
import Header from './../components/Header';
import Footer from "./../components/Footer";

export default () => {
    return (
        <div className="main">
            <Header/>

            <main className="main-content">
                <h1>Project JavaScript - React</h1>
                <p>Template created by <a className="author-link" href="//akawaka.fr">Akawaka</a>, a web expert agency.
                </p>

                <p>
                    Source code available at
                    <a href="//github.com/akawakaweb/js-bootstrapper">akawakaweb/js-bootstrapper</a>
                </p>

                <pre className="console">npx @akawaka/bootstrapper create -m vanilla /dir/my-project</pre>
            </main>

            <Footer/>
        </div>
    );
}
