const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Define the skills array
let skills = [
  [
    { name: "HTML", src: "./skills/Html.png" },
    { name: "CSS", src: "./skills/Css.png" },
    { name: "JavaScript", src: "./skills/Js.png" },
    { name: "ReactJs", src: "./skills/React.png" },
  ],
  [
    { name: "Node", src: "./skills/Nodejs.png" },
    { name: "MongoDB", src: "./skills/MongoDb.png" },
    { name: "Python", src: "./skills/Python.png" },
    { name: "Ubuntu", src: "./skills/Ubuntu.png" },
  ],
  [
    { name: "Tailwind Css", src: "./skills/Tailwind css.png" },
    { name: "Firebase", src: "./skills/firebase (1).png" },
  ],
  [
    { name: "C", src: "./skills/C.png" },
    { name: "Java", src: "./skills/Java.png" },
  ],
];

// Function to create HTML for a single skill card
let appendRow = (skills) => {
  return skills
    .map(
      (elem) =>
        `<div id="cards" class="card bg-gray-800 rounded-lg shadow-lg text-center w-64 p-8 transition-transform transform hover:scale-105 duration-300">
           <img src="${elem.src}" alt="${elem.name}" class="w-24 h-24 mx-auto mb-4">
           <p class="text-lg">${elem.name}</p>
         </div>`
    )
    .join("");
};

// Function to create HTML for a row of skills
let createRow = (skills) => {
  return `<div class="row flex justify-center gap-4 mb-4 flex-wrap">${appendRow(
    skills
  )}</div>`;
};

// Generate and log the HTML for all skill rows
let allRowsHTML = skills.map(createRow).join("");
console.log(allRowsHTML);

// Optionally, set the innerHTML of skillContainer
let skillContainer = document.querySelector(".skill-container");
skillContainer.innerHTML = allRowsHTML;




let moreProjects = [

];

const projects = [
  { 
    imgSrc: "./projects/urlShortner.png",
    title: "Url Shortner",
    description: "Developed a MERN-based URL shortener with authentication and click tracking.",
    live:"https://short-opal.vercel.app/"
  },
  { 
    imgSrc: "./projects/Blog.png",
    title: "Blog website",
    description: "A custom-designed blog using Blogger with enhanced HTML, CSS, and JavaScript for unique functionality.",
    live:"https://doflamingosaga.blogspot.com/"
  },
];
const projectContainer = document.getElementById("project-container");
const viewMoreButton = document.getElementById("view-more-button");
viewMoreButton.style.display = moreProjects.length > 0 ? 'block' : 'none';
function createProjectRow(projects) {
  return projects
    .map(
      (project) => `
        <div id="cards" class="relative h-64 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden w-full max-w-xs group">
          <img src="${project.imgSrc}" alt="Project Image" class="w-full h-full object-cover transition-all duration-300 group-hover:filter group-hover:brightness-60 group-hover:blur-sm"/>
          <div class="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center gap-4 p-4 hidden group-hover:flex">
            <h1 class="text-2xl font-bold">${project.title}</h1>
            <p class="about-section text-center text-base">${project.description}</p>
            <a href="${project.live}"  target="_blank" class="bg-yellow-500 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-600">
              See More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      `
    )
    .join("");
}

function renderProjects() {
  const rows = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }
  projectContainer.innerHTML = rows.map(createProjectRow).join("");
}

function addMore() {
  const newProjects = moreProjects.splice(0, 3);
  if (newProjects.length > 0) {
    projects.push(...newProjects);
    renderProjects();
  }
  
  // Hide the button if no more projects are left
  if (moreProjects.length <= 0) {
    viewMoreButton.style.display = "none";
  }
}

// Initial rendering of projects
renderProjects();

// Event listener for 'View More' button
viewMoreButton.addEventListener("click", addMore);

// Example testimonials array
const testimonials = [
  {
    name: "Suyog Borade, Startup Founder, Jaipur",
    testimonial: "Karan’s work on our e-commerce site was nothing short of impressive. As a freelance MERN developer, he brought our vision to life with a sleek, responsive design and a powerful backend. His ability to work independently and manage tight deadlines was exactly what we needed.",
  },
  {
    name: "The Karan Malkar - Java Developer, Pune",
    testimonial: "Karan’s freelancing services were invaluable for our project. We needed a custom web app, and he nailed every aspect, from frontend design to backend integration. His professionalism and technical skills make him a go-to developer for any project.",
  },
 
];

const testimonialContainer = document.querySelector(".testimonial-container");

function createTestimonialCard(testimonial) {
  return `
    <div class="testimonial-card bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full text-center">
      <h3 class="text-2xl font-semibold mb-4">${testimonial.name}</h3>
      <p class="blockquote text-lg leading-relaxed">${testimonial.testimonial}</p>
    </div>
  `;
}

testimonialContainer.innerHTML = testimonials
  .map(createTestimonialCard)
  .join("");


 

  // gsap.registerPlugin(ScrollTrigger);

  // // GSAP animation for the cards
  // gsap.from(".card", {
  //     scrollTrigger: {
  //       markers: true,
  //         trigger: ".card",
  //         start: "top 50%",  // Adjust this to control when the animation starts
  //         end: "bottom 80%", // Adjust this to control when the animation ends
  //         toggleActions: "play none none reverse" // Play animation when scrolling down, reverse when scrolling up
  //     },
  //     opacity: 0,
  //     x: 100,
  //     duration: 1,
  //     stagger: 0.5 // Adds a delay between each card's animation
  // });
