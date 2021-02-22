<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'Tools' }">
                    <button style="background-color: #1a92f9" v-ripple><i class="fad fa-toolbox"></i> ابزار ها</button>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Tools' }">
                    <button style="background-color: #ff006e" v-ripple><i class="fad fa-code"></i> توسعه دهنده</button>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Tools' }">
                    <button style="background-color: #8338ec" v-ripple><i class="fad fa-cogs"></i> تنظیمات</button>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Tools' }">
                    <button style="background-color: #fb5607" v-ripple>
                        تماس باما
                    </button>
                </router-link>
            </li>
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
        },
    };
</script>
