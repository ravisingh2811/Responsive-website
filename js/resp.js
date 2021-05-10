burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navList = document.querySelector('.nav-list')


burger.addEventListener('click', function () {
        rightnav.classList.toggle('v-class-resp')
        navList.classList.toggle('v-class-resp')
        navbar.classList.toggle('h-nav-resp')
    })