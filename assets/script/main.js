let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
    interaction.classList.toggle('jump')
    console.log(interaction.classList.toggle('jump'))
}

let firstLink = document.querySelector('.first');
mouseover = frontendLink => {
    frontendLink.addEventListener('mouseover', () => {
        /*bij mouse over maak de achtergrondkleur rood*/
        frontendLink.style.background = 'red';

        console.log('mouse is over frontend');
    });
}
mouseover(firstLink);

// https://www.w3schools.com/jsref/obj_mouseevent.asp
let SecondLink = document.querySelector('.design');
let mousout = second => {

    second.addEventListener('mouseout', () => {/*als je met je muis op het element staat en dan weer weggaat dan word die blauw*/
        second.style.background = 'blue';
        console.log('Mouse is op design geweest en weer weg');
    });/*https://www.w3schools.com/jsref/event_onmouseout.asp*/
}
mousout(SecondLink);

let thirdLink = document.querySelector('.and')
let click = third => {
    third.addEventListener("click", () => {/*aanpassen kleur bij click*/
        third.style.color = 'red'
        console.log('click on element');
    });
}
click(thirdLink);

let fourthLink = document.querySelector('.development');
let clickBackground = fourth => {
    fourth.addEventListener("dblclick", () => {
        fourth.style.backgroundColor = 'purple'; /*aanpassen kleur bij klik*/
        console.log('click on element');
    });
}
clickBackground(fourthLink);

let fiveLink = document.querySelector('.sprint5');

let clicktoggle = five => {
    five.addEventListener("click", () => {
        five.classList.toggle('mystyle');/*als mystyle niet ebstaat
        voeg toe en voer bij iedere klick de proporties toe*/
    });
}

clicktoggle(fiveLink);


let sixLink = document.querySelectorAll('.fix');
let clickfunction = (e) => {
    e.addEventListener("click", () => {
        e.classList.add('fix-animation');/*als mystyle niet ebstaat
        voeg toe en voer bij iedere klick de proporties toe*/
    });
}

clickfunction(sixLink);

let sevenLink = document.querySelector(".the");
let clickscale = sevem => {
    sevem.addEventListener("click", () => {
        sevem.style.scale = 1.5;
        console.log('click on element');
    });
}
clickscale(sevenLink);

let eigthLink = document.querySelector(".the");








// let frontendlink = document.querySelector('section')
// frontendlink.textContent=frontendlink.classList.contains('first')
//     ? "The classList contains 'c'"
//     : "The classList does not contain 'c'";