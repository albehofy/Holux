/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const HEADER = document.getElementById("header");
  if (window.scrollY >= 50) {
    HEADER.classList.add("scroll-header");
  } else {
    HEADER.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
const swiper = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== VALUE ACCORDION ===============*/
const accordionItem = document.querySelectorAll(".value__accordion-item");
accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordio-open");
    toggleItem(item);
    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");
  if (item.classList.contains("accordio-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordio-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordio-open");
  }
};
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active__link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active__link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
function scrollup() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 350) {
    scrollup.classList.add("show-scroll");
  } else {
    scrollup.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollup);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector("#theme-button");
const darkTheme = "dark__theme";
const iconTheme = "bx-sun";

// previus selected topic if user selected.
const selectedTheme = localStorage.getItem("selecte-theme");
const selectedIcon = localStorage.getItem("selecte-icon");

// we obtain the current theme
const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};
const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";
};

// validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
// active / deactive the theme manually with the button
themeButton.addEventListener("click", () => {
  // add or remove the dark / icon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // we save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

scrollReveal.reveal(
  ".home__title,.popular__container,.subscribe__container,.footer__container"
);
scrollReveal.reveal(".home__description, .footer__info", { delay: 500 });
scrollReveal.reveal(".home__search", { delay: 600 });
scrollReveal.reveal(".home__value", { delay: 700 });
scrollReveal.reveal(".home__images", { delay: 800, origin: "bottom" });
scrollReveal.reveal(".logos__img", { interval: 100 });
scrollReveal.reveal(".value__images, .contact__content", { origin: "left" });
scrollReveal.reveal(".value__content, .contact__images", { origin: "right" });
