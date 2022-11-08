const { createApp } = Vue
const { createRouter, createWebHashHistory } = VueRouter

import booksApp from './views/books-app.cmp.js'
import aboutPage from './views/about-page.cmp.js'
import homePage from './views/home-page.cmp.js'
import bookDetails from './views/book-details.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'
import addBook from './views/add-book.cmp.js'




import appFooter from './cmps/app-footer.cmp.js'
import appHeader from './cmps/app-header.cmp.js'


const options = {
    template: `
    <app-header />
    <user-msg />  
    <router-view />
    <app-footer />
    `,

    components: {
        appFooter,
        appHeader,
        userMsg,
    }
}

const routerOptions = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: homePage
        },
        {
            path: '/books',
            component: booksApp
        },
        {
            path: '/about',
            component: aboutPage
        },
        {
            path: '/books/:id',
            component: bookDetails
        },
        {
            path: '/add',
            component: addBook
        },
    ]
}

const app = createApp(options)
const router = createRouter(routerOptions)

app.use(router)
app.mount('#app')