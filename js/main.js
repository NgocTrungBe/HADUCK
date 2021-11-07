const $$ = document.querySelectorAll.bind(document);

/*----filter nav events*/
const nav_items = $$('.nav-item');

nav_items.forEach((nav, index) => {
    nav.onclick = function() {
        $('.nav-item.nav-active').removeClass('nav-active')
        this.classList.add('nav-active')
    }
});

/*----modal envent----*/
const modal = $('.modal');
const modalBody = $('.modal__body');


const quickViewBtnList = $$('.content__products-quickview a');
const closeModalBtn = $('.modal__close');

quickViewBtnList.forEach((btn, index) => {
    btn.onclick = function() {

        modal.addClass('open');
        modalBody[0].style.top = "50px ";
        modalBody[0].style.opacity = 1;



    }
});

closeModalBtn[0].onclick = function() {
    modalBody[0].style.top = "-100px ";
    modalBody[0].style.opacity = 0;
    $('.modal.open').removeClass('open')
}

/*-----header----*/
const header = $('.header__bottom');
const header_row = $('.header__bottom .row');
const header_labels = $('.header__bottom-text_label');




window.addEventListener('scroll', events => {
    let y = window.scrollY;
    if (y > 100) {
        header.addClass('stick');
        header_row[0].style.height = '70px';
        header_labels[0].style.visibility = 'hidden';
        header_labels[1].style.visibility = 'hidden';

    } else {
        header.removeClass('stick');
        header_row[0].style.height = '100px';
        header_labels[0].style.visibility = 'visible';
        header_labels[1].style.visibility = 'visible';

    }
})