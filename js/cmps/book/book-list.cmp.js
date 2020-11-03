import bookPreview from './book-preview.cmp.js';


export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <h2>Our Books</h2>
            <!-- <router-link class="addbook-link" to="/addbook" exact>Add a book</router-link> -->
            <ul >
                <li v-for="currBook in books" :key="currBook.id" >
                   <book-preview :book="currBook" @click.native="bookClicked(currBook.id)" />
                   <button @click="emitRemove(currBook.id)">X</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        emitRemove(bookId) {
            // console.log('OK', carId);
            this.$emit('remove', bookId)
        },
        bookClicked(bookId) {
            console.log(bookId, 'bookclicked')
            this.$router.push(`/book/${bookId}`)
            // alert('The book ID is:', bookId);
            // this.$emit('selected', bookId)
        }
    },
    components: {
        bookPreview
    }
}