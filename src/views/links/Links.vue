<template>
    <div class="row">
        <div class="col-5">
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
        <div class="col-7">
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
</template>

<script>
    export default {
        name: "Links",
    };
</script>
