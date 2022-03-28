
if (document.documentElement.clientWidth < 768) {
   const swiper = new Swiper ('.swiper', {
       pagination: {
           el: '.swiper-pagination',
           clickable: true,
       },
        spaceBetween: 10,
        slidesPerView: 1.3
    });
}



if (document.documentElement.clientWidth >= 768) {
    let elem1 = document.getElementById('stylesheet1')
    elem1.parentNode.removeChild(elem1);

}
let button = document.querySelector('.button');
let listItems = document.querySelectorAll('.swiper-hide');
let buttonclick = false;

if (document.documentElement.clientWidth >= 1120) {
    listItems[0].classList.remove('swiper-hide');
    listItems[1].classList.remove('swiper-hide');
    listItems = document.querySelectorAll('.swiper-hide');
}
button.addEventListener('click', function () {
    for (let i = 0; i < listItems.length; i++) {
        if (buttonclick) {
            listItems[i].classList.add('swiper-hide');
        } else {
            listItems[i].classList.remove('swiper-hide');
        }
    }
    buttonclick = !buttonclick;
    if (buttonclick) {
        button.textContent = "Скрыть";
        button.classList.remove('arrow-down')
        button.classList.add('arrow-up')
    } else {
        button.textContent = "Показать все";
        button.classList.remove('arrow-up')
        button.classList.add('arrow-down')
    }
    return buttonclick;
});