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

const savedDataString = localStorage.getItem('userData');
const savedData = JSON.parse(savedDataString);

const emailPlace = savedData.name;

//редактирование

const user = JSON.parse(localStorage.getItem('userData'));
if (user && user.email) {
    document.getElementById("email").placeholder = user.email;
}



// Кнопка "Изменить"
document.getElementById("button-change-one").addEventListener('click', function () {
    const emailInput = document.getElementById("email");
    emailInput.disabled = false;

    document.getElementById("button-save").style.display = "block";
    this.style.pointerEvents = "none";
    this.style.color = "#000000";
});

// Кнопка "Сохранить"
document.getElementById("button-save").addEventListener('click', function () {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    let existingData = JSON.parse(localStorage.getItem('userData')) || {};
    existingData.email = email;
    localStorage.setItem('userData', JSON.stringify(existingData));

    emailInput.disabled = true;
    emailInput.value = "";
    this.style.display = "none";

    const buttonChange = document.getElementById("button-change-one");
    buttonChange.style.pointerEvents = "auto";
    buttonChange.style.color = "#ff4823";
});

document.getElementById("button-change-two").addEventListener('click', function () {
    const emailInput = document.getElementById("password");
    emailInput.disabled = !emailInput.disabled;

    document.getElementById("button-save").style.display = "block";
    this.style.pointerEvents = "none";
    this.style.color = "#000000";

});
document.getElementById("button-save").addEventListener('click', function () {
    const emailInput = document.getElementById("password");
    const email = emailInput.value;

    let existingData = JSON.parse(localStorage.getItem('userData')) || {};
    existingData.email = email;
    localStorage.setItem('userData', JSON.stringify(existingData));

    emailInput.disabled = true;
    emailInput.value = "";
    this.style.display = "none";

    const buttonChange = document.getElementById("button-change-two");
    buttonChange.style.pointerEvents = "auto";
    buttonChange.style.color = "#ff4823";
});

if (user && user.name) {
    document.getElementById("name").placeholder = user.name;
}
if (user && user.surname) {
    document.getElementById("Surname").placeholder = user.surname;
}
if (user && user.phone) {
    document.getElementById("phone").placeholder = user.phone;
}



document.getElementById("button-change-three").addEventListener('click', function () {
    const nameInput = document.getElementById("name");
    nameInput.disabled = !nameInput.disabled;
    const SurnameInput = document.getElementById("Surname");
    SurnameInput.disabled = !SurnameInput.disabled;
    const phoneInput = document.getElementById("phone");
    phoneInput.disabled = !phoneInput.disabled;

    document.getElementById("button-save-two").style.display = "block";
    this.style.pointerEvents = "none";
    this.style.color = "#000000";

});
document.getElementById("button-save-two").addEventListener('click', function () {

    const nameInput = document.getElementById("name");
    const name = nameInput.value;
    const SurnameInput = document.getElementById("Surname");
    const surname = SurnameInput.value;
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value;

    let existingData = JSON.parse(localStorage.getItem('userData')) || {};
    existingData.name = name;
    existingData.surname = surname;
    existingData.phone = phone;
    localStorage.setItem('userData', JSON.stringify(existingData));

    nameInput.disabled = true;
    nameInput.value = "";
    SurnameInput.disabled = true;
    SurnameInput.value = "";
    phoneInput.disabled = true;
    phoneInput.value = "";
    this.style.display = "none";

    const buttonChange = document.getElementById("button-change-three");
    buttonChange.style.pointerEvents = "auto";
    buttonChange.style.color = "#ff4823";
});