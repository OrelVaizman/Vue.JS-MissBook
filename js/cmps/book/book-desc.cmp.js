export default {
    props: ['desc'],
    template: `
    <section class="book-description">
        <h3>Description:</h3>
    <p>{{textToShow}}</p>
    <button @click="isFullDesc = !isFullDesc">{{readButton}}</button>
    </section>
    `,
    data() {
        return {
            isFullDesc: false,
        }
    },
    computed: {
        textToShow() {
            const desc = this.desc;
            if (desc.length > 100 && !this.isFullDesc) {
                return desc.substring(0, 100) + '...';
            } else {
                return desc;
            }
        },

        readButton() {
            if (!this.isFullDesc) {
                return 'Show more..'
            } else {
                return 'Show less..'
            }
        }

    }

}
