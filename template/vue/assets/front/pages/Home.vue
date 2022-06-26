<template>
    <div class="relative overflow-hidden">
        <Nav/>
        <main>
            <Header/>

            <!-- More main page content here... -->
        </main>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Header from "../components/Header.vue";

export default {
    components: {
        Nav,
        Header
    }
}
</script>
