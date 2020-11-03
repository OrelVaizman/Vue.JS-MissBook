import { bookService } from '../../services/book-service.js';

export default {
    props: ['book'],
    template: `<section v-show="reviews" class="reviews-container flex align-center wrap">
           <div class="review-card align-center" v-for="(review,idx) in reviews">
           <!-- <h4>{{idx}}</h4> -->
            <h4>Name:{{review.fullName}}</h4>
            <h4>rates:{{review.rate}}</h4>
            <h4>readAt:{{review.readAt}}</h4>
            <h4>review:</h4>
            <p>{{review.reviewText}}</p>
            <button @click="onRemoveReview(idx)">X</button>
            </div>
            </section>
    `,
    data() {
        return {
            reviews: this.book.reviews
        }
    },
    created() {
    },
    methods: {
        onRemoveReview(idx) {
            bookService.removeReview(this.book.id, idx)
        },
    }
}