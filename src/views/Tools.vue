<template>
    <div class="tools">
        <div class="container">
            <h1>ابزار ها</h1>
            <div class="row" style="margin-top: 60px">
                <div class="col-3">
                    <div class="card-tools" v-ripple>
                        <i style="color: #fb5607" class="fad fa-link"></i>
                        <span>مدیریت لینک</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-tools" v-ripple>
                        <i style="color: #ff006e" class="fad fa-qrcode"></i>
                        <span>مدیریت بارکد</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-tools" v-ripple>
                        <i style="color: #3a86ff" class="fab fa-telegram"></i>
                        <span>مدیریت تلگرام</span>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card-tools" v-ripple>
                        <i style="color: #8338ec" class="fad fa-file-alt"></i>
                        <span>لورم ایپسوم</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tools",
    };
</script>
