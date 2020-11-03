import bookApp from '../pages/book-app.cmp.js';
import homePage from '../pages/home-page.cmp.js';
import aboutUs from '../pages/about-us.cmp.js';
import bookDetails from '../cmps/book/book-details.cmp.js';
import bookAdding from '../pages/add-book.cmp.js';


const myRoutes = [
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutUs
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/addbook',
        component: bookAdding
    }
]

export const myRouter = new VueRouter({ routes: myRoutes })

