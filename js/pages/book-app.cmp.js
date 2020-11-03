import { bookService } from '../services/book-service.js'
import bookFilter from '../cmps/book/book-filter.cmp.js'
import bookList from '../cmps/book/book-list.cmp.js'
import bookDetails from '../cmps/book/book-details.cmp.js'

export default {
    template: `
        <section class="book-app">
        <book-filter @doFilter="setFilter"></book-filter>
        <book-list :books="booksToShow" @remove="removeBook"></book-list>
        </section>
    `,
    data() {
        return {
            filterBy: null,
            books: null
        }
    },
    computed: {
        booksToShow() {
            console.log('bookstoshow')
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.byName.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(txt) &&
                (book.listPrice.amount >= this.filterBy.fromPrice && book.listPrice.amount <= this.filterBy.toPrice)
            )
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId);
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    },
    components: {
        bookService,
        bookDetails,
        bookFilter,
        bookList,
        
    }
}