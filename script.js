const mobileMenu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger-container')

// will decide later what to do with it. 

// const linkHome = document.querySelector('#link-home');
// const linkAbout = document.querySelector('#link-about');
// const linkBlog = document.querySelector('#link-blog');
// const linkContact = document.querySelector('#link-contact');


// like the current style but will make different while working on it.

burger.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    if (mobileMenu.classList.contains('show-nav')) {
        mobileMenu.classList.remove('show-nav')
    } else {
        mobileMenu.classList.add('show-nav')
    }
}

