<template>
    <Nav />
    <router-view />
    <!-- <div class="copyright">
        <p>تمامی حقوق برای توسعه دهنده محفوظ است.</p>
        <p>توسعه دهنده : <a href="https://twitter.com/amirhossein_fzl">امیرحسین فضلی</a></p>
    </div> -->
</template>

<script>
    import Nav from "./components/nav";
    export default {
        name: "App",
        components: {
            Nav,
        },
    };
</script>
