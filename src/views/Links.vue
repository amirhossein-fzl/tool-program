<template>
    <div class="links-page">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ul class="side">
                        <li v-ripple><router-link :to="{name: 'Links'}">داشبورد</router-link></li>
                        <li v-ripple><router-link :to="{name: 'Tools'}">کوتاه کردن لینک</router-link></li>
                        <li v-ripple><router-link :to="{name: 'Links'}">لینک های کوتاه شده</router-link></li>
                    </ul>
                </div>

                <div class="col-9">
                    <div class="content">
                        a
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Links",
    };
</script>
