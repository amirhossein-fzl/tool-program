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
                    <div class="row">
                        <div class="col-4">
                            <div class="content">
                                <h3>سریع کوتاه کنید !! <i class="fad fa-rabbit-fast"></i></h3>
                                <div class="group -material" style="margin-top: 40px">
                                    <input class="field" type="text" required dir="ltr" />
                                    <label class="title">
                                        <i class="fad fa-link"></i>
                                        لینک
                                    </label>
                                </div>
                                <button v-ripple style="background-color: #f94144;margin: 0 auto; display: block;">کوتاه کن</button>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="content">
                                <h3><i class="fad fa-history"></i> آخرین لینک ها</h3>
                                <ul class="link-history">
                                    <li>
                                        <div>
                                            <a href="#">https://zaya.io/h12df</a>
                                            <p>https://google.com</p>
                                        </div>
                                        <i class="fad fa-copy"></i>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="#">https://zaya.io/h12df</a>
                                            <p>https://google.com</p>
                                        </div>
                                        <i class="fad fa-copy"></i>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="#">https://zaya.io/h12df</a>
                                            <p>https://google.com</p>
                                        </div>
                                        <i class="fad fa-copy"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
