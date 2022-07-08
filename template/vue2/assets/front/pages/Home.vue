<template>
    <div class="main">
        <Header/>

        <main class="main-content">
            <h1>Project JavaScript - Vue 2</h1>
            <p>Template created by <a class="author-link" href="//akawaka.fr">Akawaka</a>, a web expert agency.</p>

            <p>Source code available at <a href="//github.com/akawakaweb/js-bootstrapper">akawakaweb/js-bootstrapper</a></p>

            <pre class="console">npx @akawaka/bootstrapper create -m vanilla /dir/my-project</pre>
        </main>

        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
    components: {
        Header,
        Footer,
    }
}
</script>
