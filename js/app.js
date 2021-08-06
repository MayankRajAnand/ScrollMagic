
const page = document.querySelectorAll('.page');
const content = document.querySelectorAll('.left');
const content1 = document.querySelectorAll('.right');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const idlePeriod = 100;
const animationDuration = 100;

const circle = document.querySelector('.circle');
const lefty = document.querySelector('.lefty');
const text = document.querySelector('.text');



const title = document.querySelector('.title');
const textH1 = document.querySelector('.text h1');
const textP = document.querySelector('.text p');
const textH5 = document.querySelector('.text h5');
const titleimg = document.querySelector('.text .titleimg');

const titleH5 = document.querySelector('.title h5');
const titleH2 = document.querySelector('.title h2');
const titleH6 = document.querySelector('.title h6');


let lastAnimation = 0;
let index = 0;



const toggleText = (index, state) => {
    if (state === 'show') {

        content1[index].querySelector('.images').classList.add('show');


    }
    else {
        content1[index].querySelector('.images').classList.remove('show');


    }

    if (index === 0) {
        circle.setAttribute("src", "images/circle1.png");

        lefty.classList.add("first");
        lefty.classList.remove("second");
        titleimg.classList.remove('hide');
        titleimg.setAttribute("src", "img/img6.png");

        text.classList.add('.style');
        textH1.innerHTML = "ABC 123";
        textP.innerHTML = "We are best web development <br> company in the world";
        textH5.innerHTML = "View Case Study <i class='fa fa-long-arrow-alt-right'></i>";


        titleH2.innerHTML = "25M+ Downloads";
        titleH6.innerHTML = "on appstore and google playstore";



    }
    if (index === 1) {

        circle.setAttribute("src", "images/circle2.png");

        lefty.classList.add("second");
        lefty.classList.remove("first");
        titleimg.classList.add('hide');
        lefty.classList.remove("third");
        text.classList.add('.style');
        textH1.innerHTML = "ABC 234";
        textP.innerHTML = "We are best web development <br> company in the world";
        textH5.innerHTML = "Coming Soon";

        title.style.left = "400px";
        titleH2.innerHTML = "Blockchain";
        titleH6.innerHTML = "revolution";

    }
    if (index === 2) {
        circle.setAttribute("src", "images/circle3.png");
        text.classList.add('.style');
        lefty.classList.add("third");
        lefty.classList.remove("second");
        lefty.classList.remove("fourth");
        titleimg.classList.add('hide');
        textH1.innerHTML = "ABC 345";
        textP.innerHTML = "We are best <br>web development company <br>in the world";
        textH5.innerHTML = "Coming Soon";

        title.style.left = "550px";
        titleH2.innerHTML = "NASA";
        titleH6.innerHTML = "algorithms";

    }
    if (index === 3) {
        circle.setAttribute("src", "images/circle4.png");
        text.classList.add('.style');
        lefty.classList.add("fourth");
        lefty.classList.remove("fifth");
        lefty.classList.remove("third");
        titleimg.classList.add('hide');
        textH1.innerHTML = "ABC 456";
        textP.innerHTML = "We are best <br>web development company <br>in the world";
        textH5.innerHTML = "Coming Soon";

        title.style.left = "400px";
        titleH2.innerHTML = "UX Strategy";
        titleH6.innerHTML = "and UI Design";
    }
    if (index === 4) {
        circle.setAttribute("src", "images/circle5.png");
        text.classList.add('.style');
        lefty.classList.add("fifth");
        lefty.classList.remove("sixth");
        lefty.classList.remove("fourth");
        titleimg.classList.add('hide');
        textH1.innerHTML = "ABC 567";
        textP.innerHTML = "We are best  <br> web development company<br> in the world";
        textH5.innerHTML = "View Case Study <i class='fa fa-long-arrow-alt-right'></i>"
        text.classList.add('.style');

        titleH2.innerHTML = "Text Headline";
        titleH6.innerHTML = "Footer Headline";

    }
    if (index === 5) {
        circle.setAttribute("src", "images/circle6.png");
        text.classList.add('.style');
        lefty.classList.add("sixth");
        lefty.classList.remove("fifth");
        lefty.classList.remove("seventh");

        titleimg.classList.add('hide');
        textH1.innerHTML = "ABC 678";
        textP.innerHTML = "Best Since 2017 <br>We offer wide range of<br> web development and app development";
        textH5.innerHTML = "View Case Study <i class='fa fa-long-arrow-alt-right'></i>"
        title.style.left = "400px";

        titleH2.innerHTML = "Text Headline";
        titleH6.innerHTML = "in Furniture industry";
    }
    if (index === 6) {
        circle.setAttribute("src", "images/circle7.png");

        lefty.classList.add("seventh");
        lefty.classList.remove("sixth");
        text.classList.add('.style');
        titleimg.classList.remove('hide');
        titleimg.setAttribute("src", "img/img5.png");
        textH1.innerHTML = "ABC 23478";
        textP.innerHTML = "We are best  <br> web development company<br> in the world";
        textH5.innerHTML = "Coming Soon"

        title.style.left = "500px";
        titleH2.innerHTML = "East Asia";
        titleH6.innerHTML = "Countries";
    }


}

// circle.style.animationDuration = "5s";
// circle.style.transitionDelay = "5s";
toggleText(0, 'show');

prev.addEventListener('click', () => {
    if (index < 1) return;
    toggleText(index, 'hide');
    index--;

    content.forEach((section, i) => {
        if (i === index) {
            toggleText(i, 'show');
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
})

next.addEventListener('click', () => {
    if (index > 5) return;
    toggleText(index, 'hide');
    index++;
    content.forEach((section, i) => {
        if (i === index) {
            toggleText(i, 'show');
            section.scrollIntoView({ behavior: "smooth" });
        }
    })
})

document.addEventListener('wheel', event => {

    var delta = event.wheelDelta;
    var timeNow = new Date().getTime();
    // Cancel scroll if currently animating or within quiet period
    if (timeNow - lastAnimation < idlePeriod + animationDuration) {
        event.preventDefault();
        return;
    }

    if (delta < 0) {
        var event = new Event('click');
        next.dispatchEvent(event);
    } else {
        var event = new Event('click');
        prev.dispatchEvent(event);
    }

    lastAnimation = timeNow;
})

