<template>
    <nav>
        <ul>
            <li style="background-color: #1a92f9"><i class="fad fa-toolbox"></i> ابزار ها</li>
            <li style="background-color: #ff006e"><i class="fad fa-code"></i> توسعه دهنده</li>
            <li style="background-color: #fb5607">تماس باما</li>
        </ul>
        <ModeToggle />
    </nav>
</template>

<script>
    import ModeToggle from "../components/mode-toggle";
    export default {
        name: "Nav",
        components: {
            ModeToggle,
        }
    };
</script>
