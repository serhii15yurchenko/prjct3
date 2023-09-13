// LOADER

let LOADER_WRAPPER = document.querySelector('.loader-wrapper');

window.addEventListener('load', function() {
    LOADER_WRAPPER.classList.add('loader-wrapper-open');
    setTimeout(() => {
        LOADER_WRAPPER.remove();
     }, 600)
})


// SCROLL HEADER

const HEADER = document.querySelector('.header');

window.onscroll = function() {
    // let scrollTrigger = 60;
    if (window.scrollY >= 60 || window.pageYOffset >= 60) {
        HEADER.classList.add('header-scroll');
    } else {
        HEADER.classList.remove('header-scroll');
    }
};



// BURGER MENU

const BURGER_BTN = document.querySelector('.burger-btn');
const BURGER_MENU = document.querySelector('.burger-menu');

BURGER_BTN.addEventListener('click', function() {
    BURGER_MENU.classList.toggle('burger-menu-open');
});



// CART

const CART_BTN = document.querySelector('.cart-btn');
const CART_BLOCK = document.querySelector('.cart-block');
const CART_CLOSE = document.querySelector('.close-cart');
const CART_BG = document.querySelector('.cart-bg');

CART_BTN.addEventListener('click', function() {
    CART_BLOCK.classList.toggle('cart-block-open');
    CART_BG.classList.toggle('cart-bg-open');
    document.body.classList.toggle('no-scroll');
});

CART_CLOSE.addEventListener('click', function() {
    CART_BLOCK.classList.remove('cart-block-open');
    CART_BG.classList.remove('cart-bg-open');
    document.body.classList.remove('no-scroll');
});

CART_BG.addEventListener('click', function() {
    CART_BLOCK.classList.remove('cart-block-open');
    CART_BG.classList.remove('cart-bg-open');
    document.body.classList.remove('no-scroll');
});





  
// INPUT ACCORDION 

const INPUT_RADIO = document.querySelectorAll('.input-radio');
INPUT_RADIO.forEach((element) => {
    element.addEventListener('click', () => {
        let par = element.parentElement;
        let last = par.lastElementChild;
        if(last.style.maxHeight) {
            last.style.maxHeight = null;
        } else {
            last.style.maxHeight = last.scrollHeight + "px";
        }
    });
});

// SCROLL INPUT 





// QUANTITY

const FIELD = document.querySelectorAll('.quantity-number');
const MINUS = document.querySelectorAll('.quantity-minus');
const PLUS = document.querySelectorAll('.quantity-plus');

for (let i = 0; i < MINUS.length; i++) {
MINUS[i].addEventListener('click', function minusProduct() {
if (FIELD[i].value == 1) {
FIELD[i].value = 1;
} else {
FIELD[i].value--;
}
});
}
for (let i = 0; i < PLUS.length; i++) {
PLUS[i].addEventListener('click', function plusProduct() {
FIELD[i].value++;
});
}
// FAST PURCHASE

const FAST_PURCHASE = document.querySelector('.fast-purchase');
const FAST_PURCHASE_CLOSE = document.querySelector('.fast-purchase-close');
const FAST_PURCHASE_BTN = document.querySelector('.fast-purchase-btn');
const FAST_BG = document.querySelector('.fast-bg');
const PURCHASE_ONCLICK = document.querySelector('.purchase-onclick');
const THANK_MODAL = document.querySelector('.thank-modal');
const THANK_CLOSE_BTN = document.querySelector('.thank-close-btn');

PURCHASE_ONCLICK.addEventListener('click', function() {
    FAST_PURCHASE.classList.add('fast-purchase-open');
    FAST_BG.classList.add('fast-bg-open');
    // document.body.classList.toggle('no-scroll');
});

FAST_PURCHASE_CLOSE.addEventListener('click', function() {
    FAST_PURCHASE.classList.remove('fast-purchase-open');
    FAST_BG.classList.remove('fast-bg-open');
});

FAST_BG.addEventListener('click', function() {
    FAST_PURCHASE.classList.remove('fast-purchase-open');
    FAST_BG.classList.remove('fast-bg-open');
    THANK_MODAL.classList.remove('thank-modal-open');
});

FAST_PURCHASE_BTN.addEventListener('click', function() {
    FAST_PURCHASE.classList.remove('fast-purchase-open');
    THANK_MODAL.classList.add('thank-modal-open');
});

THANK_CLOSE_BTN.addEventListener('click', function() {
    THANK_MODAL.classList.remove('thank-modal-open');
    FAST_BG.classList.remove('fast-bg-open');
});


// const INPUT = document.querySelector('.ons');

// INPUT.addEventListener('focus', function() {
//     // document.body.scrollTop += this.getBoundingClientRect().top - 100;
//     FAST_PURCHASE.style.top = '-75px';
//     console.log('ll')
// });

// TABS

// const TABS_ITEM = document.querySelectorAll('.tabs-item');
const ITEM_TOP = document.querySelectorAll('.item-top');

ITEM_TOP.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('item-top-active');
        let itemBottom = element.nextElementSibling;
        if(itemBottom.style.maxHeight) {
            itemBottom.style.maxHeight = null;
        } else {
            itemBottom.style.maxHeight = itemBottom.scrollHeight + "px";
        }
    });
});

// for(let i = 0; i < TABS_ITEM.length; i++) {
//     TABS_ITEM[i].addEventListener('click', function() {
//         this.classList.toggle('tabs-item-active');
//     });
    
// };

// for(let i = 0; i < ITEM_TOP.length; i++) {
    
//     ITEM_TOP[i].addEventListener('click', function() {
//         const ITEM_BOTTOM = document.querySelectorAll('.item-bottom');
//         for(let i = 0; i < ITEM_BOTTOM.length; i++) {
//             ITEM_BOTTOM[i].classList.toggle('item-bottom-active');
//         console.log('he');
//         }
        
//     });    
// }

// MODAL CALLBACK
const MODAL_CALLBACK = document.querySelector('.modal-callback');
const TELEFON_ICON = document.querySelector('.tel-icon');
const CALLBACK_CROSS = MODAL_CALLBACK.querySelector('.fa-xmark');
const GREEN_BG = document.querySelector('.green-bg');
const MODAL_CALLBACK_BTN = document.querySelector('.modal-callback-btn');
const MODAL_ANSWER = document.querySelector('.modal-answer');
const ANSWER_BUTTON = document.querySelector('.answer-button');


TELEFON_ICON.addEventListener('click', function() {
    MODAL_CALLBACK.classList.toggle('modal-callback-open');
    GREEN_BG.classList.toggle('green-bg-open');
});

CALLBACK_CROSS.addEventListener('click', function() {
    MODAL_CALLBACK.classList.remove('modal-callback-open');
    GREEN_BG.classList.remove('green-bg-open');
});

GREEN_BG.addEventListener('click', function() {
    MODAL_CALLBACK.classList.remove('modal-callback-open');
    GREEN_BG.classList.remove('green-bg-open');
    MODAL_ANSWER.classList.remove('modal-answer-open');
});

MODAL_CALLBACK_BTN.addEventListener('click', function () {
    MODAL_CALLBACK.classList.remove('modal-callback-open');
    MODAL_ANSWER.classList.add('modal-answer-open');
});

ANSWER_BUTTON.addEventListener('click', function () {
    MODAL_ANSWER.classList.remove('modal-answer-open');
    GREEN_BG.classList.remove('green-bg-open');
});










// QUANTITY
  

const QUANTITY_CARD = document.querySelector('.quantity-card');
const DASH = document.querySelector('.minus');
const CROSS = document.querySelector('.plus');
  
DASH.addEventListener('click', function minusProduct() {
if (QUANTITY_CARD.value == 1) {
QUANTITY_CARD.value = 1;
} else {
QUANTITY_CARD.value--;
}
});
    
CROSS.addEventListener('click', function plusProduct() {
QUANTITY_CARD.value++;
});







