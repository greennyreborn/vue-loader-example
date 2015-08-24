var Vue = require('vue')
var appOptions = require('./app.vue')
console.log(appOptions)
var app = new Vue(appOptions).$mount('#app')
