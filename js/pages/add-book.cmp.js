import { utilService } from '../services/util-service.js'
import { bookService } from '../services/book-service.js'
import bookPreview from '../cmps/book/book-preview.cmp.js';

export default {
    template: `
    <section>
        <h1>Adding Book Section - To Be Edited</h1>
        <input @change="onSearchBook" v-model="bookToSearch" placeholder="Search book to add"/>
        <ul >
                <li v-if="(foundBooks)" v-for="currBook in foundBooks" :key="currBook.id" >
                   <book-preview :book="currBook"/>
                   <button @click="onAddBook(currBook)">Add Book</button>
                </li>
            </ul>
    </section>
    `,
    data() {
        return {
            bookToSearch: null,
            foundBooks: null
        }
    },
    methods: {
        onSearchBook() {
            bookService.getBookstoShow(this.bookToSearch)
                .then(books => {
                    this.foundBooks = books;
                    utilService.storeToStorage('FOUNDBOOKS', this.foundBooks)
                    console.log(this.foundBooks)
                })
        },
        onAddBook(book) {
            bookService.addBook(book)
            this.$router.push(`/book/${book.id}`)
        }
    },
    created() {
        this.foundBooks = utilService.loadFromStorage('FOUNDBOOKS')
    },
    components: {
        bookPreview,

    }
}