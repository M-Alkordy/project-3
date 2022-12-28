/* navbar */
const home = document.getElementById('HomeNav');
const AboutUs = document.getElementById('AboutUsNav');
const Services = document.getElementById('ServicesNav');
const ContactUs = document.getElementById('ContactUsNav');
const Blog = document.getElementById('BlogNav');
const scroll = document.getElementById('border_horizontal_scroll');
const links = document.querySelectorAll('.navbar_items a');
const HomeSection = document.getElementById("HomeSection");
const AboutUsSection = document.getElementById("AboutUsSection");
const ServicesSection = document.getElementById("ServicesSection");
const ContactUsSection = document.getElementById("ContactUsSection");
const BlogSection = document.getElementById("BlogSection");

function homeActive() {
    scroll.style.transform = `translateX(0px)`;
    scroll.style.display = `block`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    home.classList.add('active')
}

function AboutUsActive() {
    scroll.style.transform = `translateX(6.2225vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    AboutUs.classList.add('active')
}

function ServicesActive() {
    scroll.style.transform = `translateX(14.2752vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    Services.classList.add('active')
}

function ContactUsActive() {
    scroll.style.transform = `translateX(22.1815vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    ContactUs.classList.add('active')
}

function BlogActive() {
    scroll.style.transform = `translateX(30.9vw)`;
    links.forEach(element => {
        element.classList.remove('active')
    });
    Blog.classList.add('active')
}

home.addEventListener('click', homeActive);
AboutUs.addEventListener('click', AboutUsActive);
Services.addEventListener('click', ServicesActive);
ContactUs.addEventListener('click', ContactUsActive);
Blog.addEventListener('click', BlogActive);
/* homeActive(); */

let autoMove = () => {
    if (scrollY >= HomeSection.offsetTop -300 && scrollY < AboutUsSection.offsetTop -300) {
        homeActive();
      } else if (scrollY > AboutUsSection.offsetTop -300  && scrollY < ServicesSection.offsetTop -300) {
        AboutUsActive();
      } else if (scrollY > ServicesSection.offsetTop -300 && scrollY < ContactUsSection.offsetTop -300) {
        ServicesActive();
      } else if (scrollY >ContactUsSection.offsetTop -300 && scrollY < BlogSection.offsetTop -300) {
        ContactUsActive();
      }else if (scrollY >BlogSection.offsetTop -300) {
        BlogActive();
      }
};
    
window.addEventListener("scroll", () => autoMove());


/* first slider */
const slides = document.querySelectorAll(".slide");
const dots = document.querySelector(".dots");
let currentSlide = 0;

const goToSlide = function (current) {
  slides.forEach(
    s => (s.style.transform = `translateX(${-72.9136 * current}vw)`)
  );
};

//*********defalut*********
goToSlide(0);

currentSlide = 1;

//********dots********** */
slides.forEach((s, i) => (dots.innerHTML += `<div class="dot"></div>`));
const dot = document.querySelectorAll(".dot");
dot[0].style.backgroundColor = "#282828";
for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", () => {
    dot.forEach((d) => {
      d.style.backgroundColor = "#D9D9D9";
    });
    goToSlide(i);
    dot[i].style.backgroundColor = "#282828";
    currentSlide = i;
  });
}

/* sec slider */
const secSlides = document.querySelectorAll(".sec_slide");
const secDots = document.querySelector(".sec_dots");
let secCurrentSlide = 0;

const secGoToSlide = function (current) {
    secSlides.forEach(
    s => (s.style.transform = `translateX(${-80.6002 * current}VW)`)
  );
};

//*********defalut*********
secGoToSlide(0);

secCurrentSlide = 1;

//********dots********** */
secSlides.forEach((s, i) => (secDots.innerHTML += `<div class="secDot"></div>`));
const secDot = document.querySelectorAll(".secDot");
secDot[0].style.backgroundColor = "#282828";
for (let i = 0; i < secDot.length; i++) {
    secDot[i].addEventListener("click", () => {
        secDot.forEach((d) => {
      d.style.backgroundColor = "#D9D9D9";
    });
    secGoToSlide(i);
    secDot[i].style.backgroundColor = "#282828";
    secCurrentSlide = i;
  });
}