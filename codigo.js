const projectsContainer = document.querySelector(".projects");

//Mobile Navbar expands
const circle = document.querySelector(".circle");
const hamburgerContainer = document.querySelector(".hamburger-container");
const hamburgerIcon = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerContainer.addEventListener("click", (e) => {
  circle.classList.toggle("expand-circle");

  hamburgerIcon.classList.toggle("nav-clicked");
  setTimeout(() => {
    closeBtn.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
  }, 500);
  mobileNav.classList.toggle("hidden");
});

const icons = {
  ui: "https://www.codigo.co/img/ui/ico-uiux.svg",
  web: "https://www.codigo.co/img/ui/ico-uiux.svg",
  mobile: "https://www.codigo.co/img/ui/ico-app.svg",
  cms: "https://www.codigo.co/img/ui/ico-cms.svg",
};

const projects = [
  {
    title: "Banking & Finance",
    secondTitle: "OCBC Pay Anyone",
    icons: [icons["mobile"], icons["ui"]],
    img: "https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg",
  },
  {
    title: "Others",
    secondTitle: "Ecolab",
    icons: [icons.mobile, icons.cms, icons.ui],
    img: "https://cdn.codigo.co/uploads/2021/04/ECO-0@2x.jpg",
  },
  {
    title: "Others,Start-ups",
    secondTitle: "KIWI Auto Marketplace",
    icons: [icons.mobile, icons.cms, icons.ui, icons.web],
    img: "https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg",
  },
  {
    title: "Lifestyle",
    secondTitle: "Furama Hotels ",
    icons: [icons.mobile, icons.ui],
    img: "https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg",
  },
  {
    title: "Transports & Logistics",
    secondTitle: "Woodlands Transport",
    icons: [icons.mobile, icons.ui, icons.cms, icons.web],
    img: "https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg",
  },
  {
    title: "Lifestyle, Retail & Entertainment, Start-ups",
    secondTitle: "Ready To Travel(SATS)",
    icons: [icons.mobile, icons.ui, icons.cms, icons.web],
    img: "https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg",
  },
];

projects.forEach((project) => {
  const html = `
    <div class="project">
    <img
      class="project__img"
      src=${project.img}
      alt=""
    />
    <div class="project__title">
      <p>${project.title}</p>
      <p class="bold">${project.secondTitle}</p>
    </div>
    <div class="project__icons">
    ${project.icons.map((icon) => {
      return ` <div class="project__icon-container">
        <img
          class="svg-icon"
          src=${icon}
          alt=""
        />
      </div>`;
    })}
    </div>
  </div>
    `;
  projectsContainer.insertAdjacentHTML("beforeend", html);
});
