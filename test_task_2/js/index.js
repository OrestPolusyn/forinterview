"use strict";

const phones = [

    {
        price: 519.00,
        name: 'IPhone 5',
        img: 'images/phoneImage.png',
        color: 'Серый',
        memory: '64 Gb',
        amount: 4,
    },
    {
        price: 519.00,
        name: 'IPhone 5',
        img: 'images/phoneImage.png',
        color: 'Белый',
        memory: '128 Gb',
        amount: 4,
    },
    {
        price: 519.00,
        name: 'IPhone 5',
        img: 'images/phoneImage.png',
        color: 'Белый',
        memory: '64 Gb',
        amount: 4,
    },
    {
        price: 519.00,
        name: 'IPhone 5',
        img: 'images/phoneImage.png',
        color: 'Серый',
        memory: '128 Gb',
        amount: 4,
    },
    {
        price: 519.00,
        name: 'IPhone 5',
        img: 'images/phoneImage.png',
        color: 'Белый',
        memory: '64 Gb',
        amount: 4,
    },
    {
        price: 519.00,
        name: 'IPhone 5',
        img: 'images/phoneImage.png',
        color: 'Серый',
        memory: '32 Gb',
        amount: 4,
    },
    {
        price: 519.00,
        name: 'IPhone 5',
        img: 'images/phoneImage.png',
        color: 'Белый',
        memory: '64 Gb',
        amount: 4,
    },
    {
        price: 519.00,
        name: 'IPhone 5',
        img: 'images/phoneImage.png',
        color: 'Белый',
        memory: '128 Gb',
        amount: 4,
    }
]

const phoneSection = document.querySelector(".phone-list");
const popup = document.querySelector('.popup');
const backlay = document.querySelector('.backlay');
const close = document.querySelector('.close');
const list = document.querySelector('.phone-list');
const source = document.querySelector('#phone-card').innerHTML.trim();
const template = Handlebars.compile(source);
let markup = template(phones);


phoneSection.addEventListener('click', presButton);
list.insertAdjacentHTML('afterbegin', markup);
backlay.addEventListener('click', hide);
close.addEventListener('click', hide);

function presButton(event) {
    const target = event.target;

    if (target.nodeName !== "BUTTON") return;
    if (target.dataset.action === "add") {
        popup.style.display = "block";
        backlay.style.display = "block";
    }
}

function resetList() {
    let markup = template(phones);
    console.log(markup);
    return list.innerHTML = markup;
}

function hide() {
    if (backlay.click) {
        popup.style.display = "none";
        backlay.style.display = "none";
    }
}

const memory = document.querySelector('.memory');
const color = document.querySelector('.color');
const count = document.querySelector('.count');
const addOption = document.createElement('option');
let counter = 0;

window.onload = addItems();

function addItems() {

    for (let i = 0; i <= phones.length; i++) {
        counter = counter + 1;
        // console.log(counter)
        let listPhone = document.createElement('option');
        listPhone.innerHTML = phones[i].memory;
        document.querySelector('.memory').appendChild(listPhone);

        let colorPhone = document.createElement('option');
        colorPhone.innerHTML = phones[i].color;
        document.querySelector('.color').appendChild(colorPhone);

        let countPhone = document.createElement('option');
        countPhone.innerHTML = counter;
        document.querySelector('.count').appendChild(countPhone);


    }


}