<template>
    <div class="links-page">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ul class="side">
                        <li><router-link v-ripple :to="{ name: 'Links' }">داشبورد</router-link></li>
                        <li><router-link v-ripple :to="{ name: 'Tools' }">کوتاه کردن لینک</router-link></li>
                        <li><router-link v-ripple :to="{ name: 'Links' }">لینک های کوتاه شده</router-link></li>
                    </ul>
                </div>

                <div class="col-9">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LinksIndex",
    };
</script>
