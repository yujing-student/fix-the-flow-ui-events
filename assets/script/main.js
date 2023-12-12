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
        /*bij mouseover word de tekst rood als je erop staat of als de muis weer weg is*/
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
        first.classList.add('frontend-animaton');
        console.log('mouse is over frontend');
    });
}/*1ste interactie*/
mouseover();


// https://www.w3schools.com/jsref/obj_mouseevent.asp

let mousout = second => {
    second = document.querySelector('.design');
    second.addEventListener('mouseout', () => {/*als je met je muis op het element staat en dan weer weggaat dan word die blauw*/
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
        second.classList.add('design-animation');
        console.log('Mouse is op design geweest en weer weg');
    });/*https://www.w3schools.com/jsref/event_onmouseout.asp*/
}/*2de interacite*/
mousout();


let click = third => {
    third = document.querySelector('.and')
    third.addEventListener("click", () => {/*aanpassen kleur bij click*/
        third.style.color = 'red'/*https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event*/
        console.log('click on element');
        third.innerHTML = "The & element is being clicked";/*deze tekst neerzetten bij click*/

    });
}/*3de interacite*/
click();


let dbclick = fourth => {
    fourth = document.querySelector('.development');
    fourth.addEventListener("dblclick", () => {
        fourth.style.backgroundColor = 'purple'; /*aanpassen kleur bij 2x klikken*/
        console.log('click on element');
    });
}
dbclick();


let clicktoggle = five => {
    five = document.querySelector('.sprint5');
    five.addEventListener("click", () => {
        five.classList.toggle('sprint5-animation');/*als mystyle niet ebstaat
        voeg toe en pas bij iedere klick de proporties toe of haal het weg*/
    });
}

clicktoggle();


// let sixLink = document.querySelector('.fix');

let mouseleave = (six) => {
    six = document.querySelector(".fix");
    six.addEventListener('mouseleave', () => {
        six.classList.add('fix-animation');/*als de muis op het element is en daarna weg is van het element fix pas deze proporties toe van de class*/
    });
}

mouseleave();


// let sevenLink = document.querySelector(".the");
let wheel = sevem => {
    sevem = document.querySelector(".the");
    sevem.addEventListener("wheel", () => {
        // als je met je wielmuis hebt ingezoomd dan word het element groter
        sevem.classList.add('the-animation');/*https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event*/
    });
}
wheel();


let mouseup = eight => {
    eight = document.querySelector(".flow");
    eight.addEventListener('mouseup', () => {
        // als de muis op het element staat en weggaat verberg het element
        eight.style.display = 'none';
        console.log('display none on element');
    });
}
mouseup();

let KeydownA = (nine) => {
    nine = document.querySelector('.user');
    nine.addEventListener('keydown', clickkey => {
        /*als de key a is ingedrukt pas de proporties van de class toe*/
        if (clickkey.key === 'a') {/*hoofdlettergevoelig*/

            nine.classList.add('user-animation');
        }
    });
}

KeydownA();
let KeyUpL = (Ten) => {
    Ten = document.querySelector('.interface');
    Ten.addEventListener('keyup', releasekey => {
        /*als de key l is ingedrukt en losgelaten pas de proporties van de class toe*/
        if (releasekey.key === 'l') {
            Ten.classList.add('interface-animation');
        }
    });
}

KeyUpL();

// hier naar kijken voor in leertaak
// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// let frontendlink = document.querySelector('section')
// frontendlink.textContent=frontendlink.classList.contains('first')
//     ? "The classList contains 'c'"
//     : "The classList does not contain 'c'";