
export default {
    props: ['book'],
    template: `
        <section class="book-preview">
           <h4>{{book.title}}</h4>
           <img :src='book.thumbnail' />
           <h5>Price: {{book.listPrice.amount}}{{currencyCode}}</h5>
        </section>
    `,
    computed: {
        currencyCode() {
            if (this.book.listPrice.currencyCode === 'EUR') return '€'
            if (this.book.listPrice.currencyCode === 'ILS') return '₪'
            if (this.book.listPrice.currencyCode === 'USD') return '$'
        }
    }
}