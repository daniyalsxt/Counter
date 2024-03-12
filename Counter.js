"use strict";
let countInitialValue = 0;
const creatingElements = () => {
    
    let createSpan = document.createElement("span");
    let createh2 = document.createElement("h2");
    let createh5 = document.createElement("h5");
    
    createSpan.innerHTML = `<i class="ri-play-large-line"></i>`;
    createh2.innerText = `${countInitialValue}`;
    createh5.innerText = "Value is Constant";

    let ParentElemForAppend = document.querySelector("#Counter");
    ParentElemForAppend.append(createSpan, createh2 , createh5 );

    let Buttons = document.querySelectorAll(".buttonWrapper>button")

    let rootElem = document.documentElement;

    const decreamentCounter = () => {
        if(countInitialValue !== 0){

            countInitialValue--
            createh2.innerText = `${countInitialValue}`;
            rootElem.classList.add("Red");
            rootElem.classList.remove("Green");
            createh5.innerText = "Value is Decreased";
            createSpan.innerHTML = `<i class="ri-arrow-down-circle-line"></i>`;
            
        };

    };

    const incrementCounter = () => {
        countInitialValue++
        createh2.innerText = `${countInitialValue}`;
        rootElem.classList.remove("Red");
        rootElem.classList.add("Green");
        createh5.innerText = "Value is Increased";
        createSpan.innerHTML = `<i class="ri-arrow-up-circle-line"></i>`;
    };
    
    Buttons[0].addEventListener("click", decreamentCounter);
    Buttons[1].addEventListener("click", incrementCounter);
}
creatingElements();