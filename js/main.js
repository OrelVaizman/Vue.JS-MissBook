
// import bookApp from './pages/book-app.cmp.js';
import { myRouter } from './services/routes.js'
import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
import userMessage from './cmps/book/user-msg.cmp.js'



const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="main-content flex column">
        <app-header></app-header>
        <user-message></user-message>        
        <router-view class="grow padding-container"></router-view>
            <app-footer></app-footer>

        </section>

    `, components: {
        appHeader,
        appFooter,
        userMessage

    }

}



const app = new Vue(options);