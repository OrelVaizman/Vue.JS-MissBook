import { bookService } from '../../services/book-service.js';
import bookDesc from '../book/book-desc.cmp.js';
import bookReview from '../book/book-review.cmp.js';
import reviewsList from '../book/reviews-list.cmp.js';

export default {
    template: `
        <section v-if="book" class="book-details flex column align-center">
        <div class="book-images-container">
        <img :src='book.thumbnail' />
        <img v-if="book.listPrice.isOnSale" src="imgs/sale.png"/>
</div>
<div class="book-container-text">
        <h1><strong>Book Title: </strong>{{book.title}}</h1>
        <h3><strong>Book Sub-title: </strong>{{book.subtitle}}</h3>
        <h3><strong>Authors: </strong>{{authors}}</h3>
        <h5><strong>Published date: </strong>{{book.publishedDate}}</h5>
        <h5><strong>Number of pages: </strong>{{book.pageCount}}</h5>
        <h5><strong>Categories: </strong>{{categories}}</h5>
        <h5><strong>Language: </strong>{{book.language}}</h5>
           <h5><strong>Tags: </strong> {{pageCount}} | {{publishedDate}} </h5>
           <p>{{categories}}</p>
           <book-desc :desc="book.description"></book-desc>
           <p :class="priceClass">Price: {{book.listPrice.amount}}{{currencyCode}}</p>
           <button @click="closeDetails">Close</button>
           <strong>Reviews:</strong>
           </div>
           <reviews-list :book="book"></reviews-list>
           <button @click="onPreviousBook">Previous Book</button><button @click="onNextBook">Next Book </button>
           <book-review class="book-review" :book="book">
           </book-review>
        </section>
    `,
    data() {
        return {
            book: null,
        }
    },
    computed: {
        authors() {
            return this.book.authors.join("");
        },
        categories() {
            return this.book.categories.join(",");
        },
        currencyCode() {
            if (this.book.listPrice.currencyCode === 'EUR') return '€';
            if (this.book.listPrice.currencyCode === 'ILS') return '₪';
            if (this.book.listPrice.currencyCode === 'USD') return '$';
        },
        pageCount() {
            if (this.book.pageCount < 100 && this.book.pageCount < 200) return 'Light Reading!';
            if (this.book.pageCount > 200 && this.book.pageCount < 500) return 'Decent Reading!';
            if (this.book.pageCount > 500) return 'Long Reading!';
        },
        publishedDate() {
            var currDate = new Date()
            var currYear = currDate.getFullYear()
            var difference = (currYear - this.book.publishedDate);
            if (difference > 10) return 'Veteran Book';
            if (difference < 1) return 'New';
        },
        priceClass() {
            return { redprice: this.book.listPrice.amount > 150, greenprice: this.book.listPrice.amount < 20 }
        },
    },
    methods: {
        closeDetails() {
            this.$router.push("/book")
        },
        onPreviousBook() {
            var prevBookID = bookService.getPreviousBookId(this.book.id)
            this.$router.push(`/book/${prevBookID}`)
        },
        onNextBook() {
            var nextBookID = bookService.getNextBookId(this.book.id);
            this.$router.push(`/book/${nextBookID}`)
        },
        onBookChange() {
            this.$emit('bookchange', this.book)
        }
    },
    created() {
        const id = this.$route.params.bookId
        console.log(id)
        if (id) {
            bookService.getBookById(id)
                .then(book => this.book = book)
        }
    },
    watch: {
        '$route.params.bookId'() {
            bookService.getBookById(this.$route.params.bookId)
                .then(book => {
                    this.book = book;
                })
        }
    },
    components:
    {
        bookDesc,
        bookReview,
        reviewsList,
    }
}