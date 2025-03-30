let DivAccount = false;
let DivContact = true;
let DivOrders = true;
const account = document.querySelector('.column__account-content');
const contact = document.querySelector('.column__personal-information');
const orders = document.querySelector('.column__my-orders');
const clickers = document.getElementsByClassName("column__transition");
function information() {
    if (DivAccount === true) {
        orders.style.display = "none";
        contact.style.display = "none";
        account.style.display = "flex";
        DivAccount = false;
        DivContact = true;
        DivOrders = true;
    }
}
function PlacesResidence  () {
    if (DivContact === true) {
        account.style.display = "none";
        orders.style.display = "none";
        contact.style.display = "flex";
        DivAccount = true;
        DivContact = false;
        DivOrders = true;
    }
}
function Orders  () {
    if (DivOrders === true) {
        account.style.display = "none";
        contact.style.display = "none";
        orders.style.display = "flex";
        DivAccount = true;
        DivContact = true;
        DivOrders = false;
    }
}
for (let i = 0; i < clickers.length; i++) {
    if (i === 0) {
        clickers[i].onclick = information;
    }
    if (i === 1) {
        clickers[i].onclick = PlacesResidence;
    }
    if (i === 2) {
        clickers[i].onclick = Orders;
    }
}