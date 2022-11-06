export default {
    props: ['book'],
    template: `
        <section className="book-details">
            <h1>{{ book.title }}</h1>
            <h3 className="author" v-for="author in book.authors">{{ author }}</h3>
            <h3 className="publis-date">{{ book.publishedDate }}</h3>
            <img :src="imgUrl" alt="">
            <p>Description: {{ book.description }}</p>
            <h4>Page Count: {{ book.pageCount }} {{ pageCount }}</h4>
            <h3>{{publishCondition}}</h3>
            <h3 :class="priceColor">Price: {{ book.listPrice.amount }} {{book.listPrice.currencyCode}}</h3>
            <img className="sale" v-if="book.listPrice.isOnSale" src="../../img/sale.png" alt="" />
            <button @click="$emit('close')">Close</button>
        </section>
    `,
    computed: {
        imgUrl() {
            return `${this.book.thumbnail}`
        },
        pageCount() {
            if (this.book.pageCount > 500) return 'Long reading'
            else if (this.book.pageCount > 200) return 'Decent reading'
            else if (this.book.pageCount < 100) return 'Light reading'
        },
        publishCondition(){
            const date = new Date
            const year = date.getUTCFullYear()
            if(year - this.book.publishedDate > 10 ) return 'Veteran Book!!'
            else return 'New!!'
        },
        priceColor(){
            if( +this.book.listPrice.amount > 150)  return 'red'
            if( +this.book.listPrice.amount < 20)  return 'green'
            
        }

    }
}