<template>
    <Nav />
    <router-view />
</template>

<script>
import Nav from "./components/nav"
    export default {
        name: 'App',
        components: {
            Nav,
        }
    };
</script>
