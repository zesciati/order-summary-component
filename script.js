/*
- panggil konten nya 
- ketika button di pencet akan ada konten menggantikan order summary
- akan muncul konten thank you

*/

const thankYou = document.querySelector(".thank-you");
const order = document.querySelector(".order");
const toThankYou = document.querySelector(".button-proceed");
const backToOrder = document.querySelector(".button-back");

toThankYou.addEventListener("click", toThank);

backToOrder.addEventListener("click", backTo);



function backTo() {
  thankYou.classList.add("hidden");
  order.classList.remove("hidden");

  localStorage.setItem("pageState", "order")
}


function toThank() {
  order.classList.add("hidden");
  thankYou.classList.remove("hidden");

  localStorage.setItem("pageState", "thank")
};


window.addEventListener("DOMContentLoaded", () => {
  thankYou.classList.add("hidden");
  order.classList.remove("hidden");


  const state = localStorage.getItem("pageState");

  if (state === "order") {
    thankYou.classList.add("hidden");
    order.classList.remove("hidden");
  } else {
    order.classList.add("hidden");
    thankYou.classList.remove("hidden");

  }


});
