
export default {
    template: `
        <header class="main-header flex space-between padding-container">
        <div class="logo"><a href="index.html">MissBook</a></div>
        <!-- <button class="mobile-menu" onclick="onToggleMenu()"><i class="fas fa-bars"></i></button> -->
        <ul class="main-nav clean-list flex">
            <li class="close-menu-li"><button class="close-menu" onclick="onToggleMenu()"><i
                        class="fas fa-times"></i></button></li>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/book" exact>Books App</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </header>
    `
}