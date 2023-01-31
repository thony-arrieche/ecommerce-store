"use strict";

const addToCartButtonsDOM = document.querySelectorAll(
    '[data-action="ADD_TO_CART"]');

    
addToCartButtonsDOM.forEach((addToCartButtonDOM) => {
    console.log(addToCartButtonDOM.parentNode); 
});