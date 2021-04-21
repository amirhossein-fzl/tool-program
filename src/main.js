import { createApp } from 'vue';
import Ripple from 'vue-ripple-directive';
import App from './App.vue';
import "./css/style.scss";
import router from './router';
import store from './store';
// import LocalStorageDB from 'local-storage-db';
import DB from './database/db';
DB.run("CREATE TABLE IF NOT EXISTS `options` ( `option_key` VARCHAR(20) NOT NULL , `option_value` TEXT NOT NULL , PRIMARY KEY (`option_key`) )");
// DB.run("INSERT INTO `options` (`option_key`, `option_value`) VALUES ('theme', false) IF NOT EXISTS");
// DB.run("INSERT INTO `options` (`option_key`, `option_value`) SELECT 'theme', false WHERE NOT EXISTS(SELECT * FROM `options` WHERE `option_key` = 'theme');");

Ripple.color = 'rgba(255, 255, 255, 0.35)';

// let db = new LocalStorageDB('database');
// if (db.get('theme') == undefined) {
//     db.create('theme', false);
// }

// if (db.get('theme') == true) {
//     let element = document.getElementsByTagName("html")[0];
//     element.classList.add("dark-mode");
// }

// console.log(DB.getOption('theme'));

// if (DB.getOption('theme'))

DB.getOption('theme').then(res => {
    if (res == true) {
        let element = document.getElementsByTagName("html")[0];
        element.classList.add("dark-mode");
    }
});


const app = createApp(App);
app.directive('ripple', Ripple);
app.use(store);
app.use(router);
app.mount('#app');
