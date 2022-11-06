import { booksService } from "../services/books-service.js"

import bookDetails from './book-details.cmp.js'
import bookPreview from './book-preview.cmp.js'
import bookList from './book-list.cmp.js'
import bookFilter from './book-filter.cmp.js'

export default {
    template: `
    <book-filter @filter="setFilter"></book-filter>
    <book-list @remove="removeBook" :books="booksToShow" @selected="selectBook"></book-list>
    <book-details v-if="selectedBook" @close="selectedBook = null" :book="selectedBook"></book-details> 
    `,
    data() {
        return {
            books: booksService.query(),
            selectedBook: null,
            filterBy: {price:200},
        }
    },
    methods: {
        selectBook(bookId) {
            const book = booksService.findBook(bookId)
            this.selectedBook = book
        },
        removeBook(bookId){
            booksService.remove(bookId)
            const idx = this.books.findIndex(book => book.id === bookId)
            this.books.splice(idx, 1)
        },
        setFilter(filterBy){
            this.filterBy = filterBy
        }
    },

    computed: {
        booksToShow() {
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter(book => (regex.test(book.title)) && book.listPrice.amount < this.filterBy.price)
        },
    },

    components: {
        bookPreview,
        bookList,
        bookDetails,
        bookFilter
        // List of components that have been imported into this file
    },
}