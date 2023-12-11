let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
    interaction.classList.toggle('jump')
    console.log(interaction.classList.toggle('jump'))
}

/*1ste link*/
let mouseover = first => {
    first = document.querySelector('.frontend');
    first.addEventListener('mouseover', () => {
        /*bij mouse over maakt de achtergrondkleur rood*/
        first.classList.add('frontend-animaton');
        console.log('mouse is over frontend');
    });
}/*1ste interactie*/
mouseover();


// https://www.w3schools.com/jsref/obj_mouseevent.asp

let mousout = second => {
    second = document.querySelector('.design');
    second.addEventListener('mouseout', () => {/*als je met je muis op het element staat en dan weer weggaat dan word die blauw*/
        // second.style.background = 'blue';
        second.classList.add('design-animation');
        console.log('Mouse is op design geweest en weer weg');
    });/*https://www.w3schools.com/jsref/event_onmouseout.asp*/
}/*2de interacite*/
mousout();


let click = third => {
    third = document.querySelector('.and')
    third.addEventListener("click", () => {/*aanpassen kleur bij click*/
        third.style.color = 'red'
        console.log('click on element');
        third.innerHTML = "The & element is being clicked";

    });
}/*3de interacite*/
click();


let clickBackground = fourth => {
    fourth = document.querySelector('.development');
    fourth.addEventListener("dblclick", () => {
        fourth.style.backgroundColor = 'purple'; /*aanpassen kleur bij klik*/
        console.log('click on element');
    });
}
clickBackground();


let clicktoggle = five => {
    five = document.querySelector('.sprint5');
    five.addEventListener("click", () => {
        five.classList.toggle('sprint5-animation');/*als mystyle niet ebstaat
        voeg toe en voer bij iedere klick de proporties toe*/
    });
}

clicktoggle();


// let sixLink = document.querySelector('.fix');

let clickfunction = (six) => {
    six = document.querySelector(".fix");
    six.addEventListener('mouseleave', () => {
        six.classList.add('fix-animation');
    });
}

clickfunction();


// let sevenLink = document.querySelector(".the");
let clickscale = sevem => {
    sevem = document.querySelector(".the");
    sevem.addEventListener("wheel", () => {
        sevem.classList.add('the-animation');
    });
}
clickscale();


let click8 = eight => {
    eight = document.querySelector(".flow");
    eight.addEventListener('mouseup', () => {
        eight.style.display = 'none';
        console.log('display none on element');
    });
}
click8();

let keyA = (nine) => {
    nine = document.querySelector('.user');
    nine.addEventListener('keydown', clickkey => {
        if (clickkey.key === 'a') {/*hoofdlettergevoelig*/
            nine.classList.add('user-animation');
        }
    });
}

keyA();
let keyL = (Ten) => {
    Ten = document.querySelector('.interface');
    Ten.addEventListener('keyup', releasekey => {
        if (releasekey.key === 'l') {
            Ten.classList.add('interface-animation');
        }
    });
}

keyL();


// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

// let frontendlink = document.querySelector('section')
// frontendlink.textContent=frontendlink.classList.contains('first')
//     ? "The classList contains 'c'"
//     : "The classList does not contain 'c'";