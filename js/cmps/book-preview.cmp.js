export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <img :src="imgUrl" alt="" />
            <h2>{{ book.title }}</h2>
        </section>
    `,
    computed: {
        getCurrency() {
            return this.book.listPrice.currencyCode 
        },
        imgUrl() {
            console.log(this.book.thumbnail);
            return this.book.thumbnail
        },
    },
}