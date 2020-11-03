import { bookService } from "../../services/book-service.js";
import { eventBus } from '../../services/event-bus-service.js'

export default {
    props: ['book'],
    template: `<section class="review-box">
    <form @submit.prevent="onSubmitReview">
    <div>
      <label>Full Name:
        <input type="text" placeholder="Full Name" v-model="bookReview.fullName" />
      </label>
    </div>
    <div class="rate">
        <strong>Review stars:</strong>
        <input type="radio" id="star5" name="rate" v-model="bookReview.rate" value="5" />
      <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" v-model="bookReview.rate" value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" v-model="bookReview.rate" value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" v-model="bookReview.rate" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" v-model="bookReview.rate" value="1" />
        <label for="star1" title="text">1 star</label>
    </div>
    <div>
    <label>Reading Date:
  <input type="date" v-model="bookReview.readAt">
  </label>
    </div>
    <div>
        <label>Review text:
        <textarea rows="4" cols="50"  v-model="bookReview.reviewText">
    </textarea>
        </label>
        </div>
        <button>Submit Review!</button>
    </form>
        <!-- {{bookReview}} -->
        </section>`,
    data() {
        return {
            bookReview: { fullName: 'Books Reader', rate: 0, readAt: new Date().toISOString().substr(0, 10), reviewText: null }
        }
    },
    methods: {
        onSubmitReview() {
            eventBus.$emit('show-msg','COOOL!')
            console.log('submit review wired')
            const review = JSON.parse(JSON.stringify(this.bookReview))
            console.log('review', review)
            bookService.addReview(this.book.id, review)
        }
    }
}