let totalPrice = 0;
let discount = 0;
let finalTotal = 0;
const purchaseBtn = document.getElementById("Purchase-btn");
const totalPriceElement = document.querySelector(".total-price");
const discountElement = document.querySelector(".discount");
const finalTotalElement = document.querySelector(".final-total");
const selectedProductsList = document.getElementById("selected-products-list");
const selectedProductNames = [];
const applyButton = document.getElementById("applyButton");
function btnPressToName(target) {
  const itemName = target.querySelector("#product-name").innerText;
  const itemPrice = parseFloat(target.querySelector("#price").innerText);
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedProductsList.appendChild(li);
  totalPrice += itemPrice;
  finalTotal = totalPrice - discount;
  totalPriceElement.textContent = totalPrice.toFixed(2);
  discountElement.textContent = discount.toFixed(2);
  finalTotalElement.textContent = finalTotal.toFixed(2);
  selectedProductNames.push(itemName);
  updateApplyBtn();
  updatePurchaseBtn();
}
function updateApplyBtn() {
  const totalPriceText = totalPriceElement.textContent;
  const totalPrice = parseFloat(totalPriceText);
  if (totalPrice >= 200) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", "true");
  }
}
function updatePurchaseBtn() {
  const totalPriceText = totalPriceElement.textContent;
  const totalPrice = parseFloat(totalPriceText);
  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  } else {
    purchaseBtn.setAttribute("disabled", "true");
  }
}
function applyDiscount(couponCode) {
  if (couponCode === "SELL200") {
    discount = totalPrice * 0.2;
    finalTotal = totalPrice - discount;
    discountElement.textContent = discount.toFixed(2);
    finalTotalElement.textContent = finalTotal.toFixed(2);
  } else {
    alert("Please provide a valid input");
  }
}
const couponInput = document.getElementById("couponInput");
applyButton.addEventListener("click", () => {
  const couponCode = couponInput.value.trim();
  applyDiscount(couponCode);
  couponCode.value = " ";
});
couponInput.addEventListener("input", () => {
  updateButtonState();
});

const homeBtn = document.getElementById("home-btn");
const discountNumber = document.getElementById("discount-price");
const paymentTotal = document.getElementById("final-price");
homeBtn.addEventListener("click", function () {
  sum = 0;

  totalPriceElement.innerText = "00.00";
  paymentTotal.innerText = "00.00";
  discountNumber.innerText = "00.00";
  couponInput.value = " ";
  selectedProductsList.innerHTML = " ";
  applyButton.setAttribute("disabled", "true");
  purchaseBtn.setAttribute("disabled", "true");
});
