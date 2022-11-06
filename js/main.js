const { createApp } = Vue

import booksApp from './cmps/books-app.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
import appHeader from './cmps/app-header.cmp.js'


const options = {
    template: `
    <app-header />
    <books-app />
    <app-footer />
    `,

    components: {
        booksApp,
        appFooter,
        appHeader
    }
}

const app = createApp(options)

app.mount('#app')