
Vue.component('app-header', {
 props: ['text'],
 template: '<header><h1><img src="header_logo.png" alt="FESC Logo">{{ text }}</h1></header>'
})